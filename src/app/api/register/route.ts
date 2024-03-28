import {
  AuthorizationResponse,
  RegisterUserData,
} from "@/typescript/interfaces";

export async function POST(req: Request) {
  try {
    const { email, password, confirmPassword }: RegisterUserData =
      await req.json();

    if (password === confirmPassword) {
      const successRegisterResponse: AuthorizationResponse = {
        email,
        status: "success",
      };

      return new Response(JSON.stringify(successRegisterResponse), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      });
    }
  } catch (error) {
    console.error("Error during Registration:", error);
    return new Response(JSON.stringify({ error: "Error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
