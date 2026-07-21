import { cookies } from "next/headers";


export async function createSession(userId:string) {

  const cookieStore = await cookies();


  cookieStore.set(
    "creatorhub_session",
    userId,
    {
      httpOnly:true,
      secure:false,
      sameSite:"lax",
      maxAge:60 * 60 * 24 * 7
    }
  );

}



export async function getSession(){

  const cookieStore = await cookies();


  return cookieStore.get(
    "creatorhub_session"
  );

}
