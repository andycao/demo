import React, { useState } from 'react';
import './App.css';
import DocumentTitle from 'react-document-title';

function App() {
    const NewHeader = logProps(MyHeader);
    const [title, setTitle] = useState("默认的标题");

    return (

            <div className="App">
                <NewHeader title={title}></NewHeader>
                <button onClick={() => {
                    setTitle(`title ${Math.random()}`)
                }}>ok</button>
            </div>

    );
}

class MyHeader extends React.Component {

    componentDidMount(){
        console.log('child did mount');
    }
    render(){
        return (
                <div>
                <h2>{this.props.title}</h2>
                <hr />
            </div>
        );
    }
}

function logProps(WrappedComponent) {
    return class extends React.Component {
        componentDidMount(){
            console.log('parent did mount');
            console.log(this.props);
        }
        render() {
            const { title } = this.props;
            // 将 input 组件包装在容器中，而不对其进行修改。Good!
            return <DocumentTitle title={title}>
                <WrappedComponent{...this.props} />
            </DocumentTitle>
        }
    }
}

export default App;
