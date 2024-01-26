import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  // Example 1
  const navigate = useNavigate();

  // Example 2
  const handleDynamicnavigation = (targetRout) => {
    navigate(targetRout);
    console.log(targetRout);
  }

  // Example 3
  const handleConditionalNavigation = (shouldNavigate) => {
    if (shouldNavigate) {
      navigate("/about");
    } else {
      navigate("/service");
    }
  }

  return (
    <>
      <h1>Hello Home Page</h1>

      {/* Example 1 */}
      {/* <button onClick={() => navigate("/about")}>Go To About page</button>
      <br />  
      <br />
      <button onClick={() => navigate("/service")}>Go To Service page</button>
      <br />  
      <br />
      <button onClick={() => navigate("/geturl")}>Go To URL Params page</button> */}

      {/* Example 2 */}
      {/* <button onClick={() => handleDynamicnavigation ("/about")}>Go To About page</button>
      <br />  
      <br />
      <button onClick={() => handleDynamicnavigation ("/service")}>Go To Service page</button>
      <br />  
      <br />
      <button onClick={() => handleDynamicnavigation ("/geturl")}>Go To URL Params page</button> */}

      {/* Example 2 */}
      <button onClick={() => handleConditionalNavigation(true)}>
        Go To About page
      </button>
      <br />
      <br />
      <button onClick={() => handleConditionalNavigation(false)}>
        Go To Service page
      </button>
    </>
  )
}

export default Home