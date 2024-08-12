import prismadb from "@/lib/db";
import { auth } from "../../../auth";

const getCurrentUser = async () => {
  const session = await auth();

  if(!session?.user?.email) {
    return null;
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!currentUser) {
    return null;
  }

  return currentUser;
};

export default getCurrentUser;
