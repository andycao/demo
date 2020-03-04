import React, {useState} from 'react';
import './App.css';

function App() {
    const NewHeader = logProps(MyHeader);
    const [title, setTitle] = useState("默认的标题");

    return (
        <div className="App">

            <NewHeader title={title}></NewHeader>
            <button onClick={()=>{
                setTitle(`title ${Math.random()}`)
            }}>ok</button>
        </div>
    );
}



function MyHeader(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
        </div>
    );
}

function logProps(WrappedComponent) {
    return class extends React.Component {
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }
      render() {
        // 将 input 组件包装在容器中，而不对其进行修改。Good!
        return <WrappedComponent {...this.props} />;
      }
    }
  }

export default App;
