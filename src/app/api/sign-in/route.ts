
export async function POST(req:Request) {

    const {email} = await req.json()

    const successResponse = {
      email,
      status: "success"
    }


    return new Response(JSON.stringify(successResponse),{
      headers:{
        "Content-Type" : "application/json",
      },
      status: 201
    }
   )
}