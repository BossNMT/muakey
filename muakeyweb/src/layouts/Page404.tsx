import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/web')
  }, [])

  return (
    <></>
  )
}

export default Page404;
