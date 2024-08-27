import Title from "./Title";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <div className="content-header">
        <Header/>
      </div>
      <Title title="Inicio" />
    </div>
  );
};

export default Dashboard;
