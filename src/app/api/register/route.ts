
export async function POST(req:Request) {

    const {email, password, confirmPassword} = await req.json()

    if(password === confirmPassword)
    {
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
    

   
}