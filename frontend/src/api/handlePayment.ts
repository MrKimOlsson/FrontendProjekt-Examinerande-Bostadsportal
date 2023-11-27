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

// export async function getLoggedInUser(token: string): Promise<User> {
//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
  
//       const response = await fetchData(`${API_URL}/users/me`, { method: "GET", headers });
  
//       if (!response.ok) {
//         throw new Error(`Error fetching logged-in user: ${response.statusText}`);
//       }
  
//       return response.json();
//     } catch (error) {
//       // Handle any errors that occur during the request
//       if (error instanceof Error) {
//         throw new Error(`Error fetching logged-in user: ${error.message}`);
//       } else {
//         throw new Error(`Unknown error occurred: ${error}`);
//       }
//     }
//   }

export interface PaymentCredentials {
    // paymentSuccessful: boolean,
    fullName: string,
    cardNumber: number,
    expDate: string,
    cvc: number,

}

export async function payment(credentials: PaymentCredentials): Promise<TPayment> {
    const response = await fetchData(API_URL+"/payments/add",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

    // Navigate to the home page
    window.location.href = "/confirmed";
    
    return response.json();
}

// export interface LoginCredentials {
//     email: string,
//     password: string,
// }

// export async function login(credentials: LoginCredentials): Promise<string> {
//     const response = await fetchData(API_URL+"/users/login",
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//     });

//     // Navigate to the home page
//     window.location.href = "/";

//     return response.json();
// }

// // export async function logout(onLogoutSuccessful: any) {
//     export async function logout() {
//     try {
//         // Remove the token from local storage
//         localStorage.removeItem('token');
        
//         // Call the onLogoutSuccessful callback
//         // onLogoutSuccessful();

//         // Reload the page
//         window.location.reload();
//     } catch (error) {
//         console.error(error);
//         alert(error);
//     }
// }





