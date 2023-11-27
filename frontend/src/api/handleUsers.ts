import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { API_URL } from "./config";
// import { User } from "../models/user";





async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + " message: " + errorMessage);
        }
    }
}

export async function getLoggedInUser(token: string): Promise<TUser> {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      const response = await fetchData(`${API_URL}/users/me`, { method: "GET", headers });
  
      if (!response.ok) {
        throw new Error(`Error fetching logged-in user: ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      // Handle any errors that occur during the request
      if (error instanceof Error) {
        throw new Error(`Error fetching logged-in user: ${error.message}`);
      } else {
        throw new Error(`Unknown error occurred: ${error}`);
      }
    }
  }

export interface SignUpCredentials {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmpass: string,

}

export async function signUp(credentials: SignUpCredentials): Promise<TUser> {
    const response = await fetchData(API_URL+"/users/add",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

    // Navigate to the home page
    window.location.href = "/";
    
    return response.json();
}

export interface LoginCredentials {
    email: string,
    password: string,
}
// export async function login(credentials: LoginCredentials): Promise<TUser> {
export async function login(credentials: LoginCredentials) {
    const response = await fetchData(API_URL+"/users/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    // Navigate to the home page
    window.location.href = "/";

    return response.json();
}

// export async function logout(onLogoutSuccessful: any) {
    export async function logout() {
    try {
        // Remove the token from local storage
        localStorage.removeItem('token');
        
        // Call the onLogoutSuccessful callback
        // onLogoutSuccessful();

        // Reload the page
        window.location.reload();
    } catch (error) {
        console.error(error);
        alert(error);
    }
}





// export async function signUp(credentials: SignUpCredentials): Promise<string> {
//     try {
//         const signupResponse = await fetchData(API_URL + "/users/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(credentials),
//         });

//         console.log("Signup Response Status:", signupResponse.status);

//         // Check if the signup was successful
//         if (signupResponse.status === 200) {
//             // If successful, return the bearer token
//             const token = await signupResponse.json();
//             console.log("Signup Token:", token);
//             return token;
//         } else {
//             // Handle signup error
//             // You might want to throw an error or handle it in some way
//             console.error("Signup Error:", await signupResponse.text());
//             throw new Error("Signup failed");
//         }
//     } catch (error) {
//         console.error("Signup Error:", error);
//         throw error;
//     }
// }

// export interface LoginCredentials {
//     email: string,
//     password: string,
// }

// // Function to log in a user and return a bearer token
// export async function login(credentials: LoginCredentials): Promise<string> {
//     const loginResponse = await fetchData(API_URL + "/users/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//     });

//     // Check if the login was successful
//     if (loginResponse.status === 200) {
//         // If successful, return the bearer token
//         const token = await loginResponse.json();
//         return token;
//     } else {
//         // Handle login error
//         // You might want to throw an error or handle it in some way
//         throw new Error("Login failed");
//     }
// }

// // Function to fetch user data using a bearer token
// export async function fetchUser(token: string): Promise<User> {
//     const response = await fetchData(API_URL + "/users/me", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`, // Include the bearer token in the headers
//         },
//     });

//     // Check if the user data was fetched successfully
//     if (response.status === 200) {
//         const user = await response.json();
//         return user;
//     } else {
//         // Handle user fetch error
//         // You might want to throw an error or handle it in some way
//         throw new Error("Failed to fetch user data");
//     }
// }

// // Example usage to sign up and automatically log in the user
// export async function signUpAndLogin(credentials: SignUpCredentials): Promise<User> {
//     try {
//         const token = await signUp(credentials);
//         const user = await fetchUser(token);
//         return user;
//     } catch (error) {
//         // Handle errors as needed
//         console.error(error);
//         throw error;
//     }
// }