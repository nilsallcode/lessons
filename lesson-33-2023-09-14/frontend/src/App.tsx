import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "./types/user";

const getUser = async () => {
  const { data } = await axios.get("https://dummyjson.com/users/1");
  return data;
};

function App() {

  const user = useQuery<User>({
    queryKey: ['user', 1],
    queryFn: getUser
  });

  return (
    <div>
      <div>
        {user.isLoading ? <p>Loading...</p> : (
          <p>{user.data?.age}</p>
        ) }
      </div>
      <div>
        <Hello name="John" />
      </div>
    </div>
  );
}

interface HelloProps {
  name: string
}

function Hello ({ name }: HelloProps) {
  return <p>Hello, {name}!</p>
}

export default App;
