import { AuthorizationResponse } from "@/typescript/interfaces";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const successLoginResponse: AuthorizationResponse = {
      email,
      status: "success",
    };

    return new Response(JSON.stringify(successLoginResponse), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    console.error("Error during sign-in:", error);
    return new Response(JSON.stringify({ error: "Error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
