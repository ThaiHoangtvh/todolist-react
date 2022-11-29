
import Layout from "../layout";
// import Data from "../common/result";
import BtnAdd from "../common/button";
// import ClickBtn from "../common/add";
// import Show from "../common/result";
const onSubmit = (e) =>{
  e.preventDefault();
}

const Homepage = () => {
  return <Layout id="home-page-layout">
    <form action="" method="post" onSubmit = {onSubmit}>
      <div id="enter">
        <input id="myInput" placeholder = "Add task..." type="text" />
        <BtnAdd
          
        />
      </div>
      <div id="result"> 
      </div>
      <div id ="calular">
        <div><input disabled type="number" id = "task" value = "0"/><span>Task</span></div>
        
        <div><input disabled type="number" id = "complete" value = "0"/><span>Complete</span></div>
        <div><input disabled type="number" id = "open" value = "0"/><span>Open</span></div>
      </div>
    </form>
    
  </Layout>;
};

export default Homepage;
