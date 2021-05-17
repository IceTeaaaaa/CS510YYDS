import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const backendurl = "https://backend.cs411team1.web.illinois.edu/polls/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 0,
      resultList: [],
      paperList:[],
      modal: false,
      Q:"",
      activeItem: {
        query: "",
        rank:"",
        score:0.0,
        professor: "",
        homepage: "",
        paper: ""
      },
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    const flag = this.state.flag;
    this.toggle();
    var query = item.query;
    query = query.replaceAll(" ","_");
    this.setState({ Q: item.query});
    console.log(item.query);
    if (flag === 0){
      axios
          .get(proxyurl+backendurl+"getProfessors/"+`${query}`)
          .then(res => this.getProfessorUpdate(res.data, item));
    }else if(flag === 1){
      axios
          .get(proxyurl+backendurl+"getProfessors/"+`${query}`)
          .then(res => this.getPaperUpdate(res.data, item));
    }
  };

  getProfessorUpdate(data, item){
    var templist = [];
    var temp = { rank: "", score:"",professor: "", homepage: "", paper: ""};
    for (var i=0;i<data.length;i++) {
      temp = JSON.parse(data[i]);
      if(parseFloat(temp.score) !== 0.0){
        templist.push(temp);
      }
    }
    if (templist.length === 0){
      temp = { rank: 0, score:"",professor: "No relevant data found", homepage: "", paper: ""};
      templist.push(temp);
    }
    this.setState({ resultList: templist });
  }

  getPaperUpdate(data, item){
    var templist = [];
    var temp = { rank: "", score:"",professor: "", homepage: "", paper:""};
    for (var i=0;i<data.length;i++) {
      temp = JSON.parse(data[i]);
      temp = {...temp, paper: "Conducting Truthful Surveys, Cheaply， Efficiently Learning from Revealed Preference"}
      templist.push(temp);
    }
    this.setState({ paperList: templist });
  }

  createItem = () => {
    const item = { rank: "", score:"",professor: "", homepage: "" };
    this.setState({ flag: 0, activeItem: item, modal: !this.state.modal });
  };

  createItem2 = () => {
    const item = { professor: "", homepage: "" };
    this.setState({ flag: 1, activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const flag = this.state.flag;
    if (flag === 1){
      const newItems = this.state.paperList
      console.log(newItems)
      return newItems.map((item) => (
          <li
              key={item.rank}
              className="list-group-item d-flex justify-content-between align-items-center"
          >
        <span
            className={`todo-title mr-2`}
            title={item.homepage}
        >
          <div className="d"><a href={item.homepage}>{item.professor}</a></div>
          <div>rank: {item.rank}, score: {item.score}</div>
          <div>paper: {item.paper}</div>
        </span>
          </li>
      ));
    }else{
      const newItems = this.state.resultList
      console.log(newItems)
      return newItems.map((item) => (
          <li
              key={item.rank}
              className="list-group-item d-flex justify-content-between align-items-center"
          >
        <span
            className={`todo-title mr-2`}
            title={item.homepage}
        >
          <div className="d"><a href={item.homepage}>{item.professor}</a></div>
          <div>rank: {item.rank}, score: {item.score}</div>
        </span>
          </li>
      ));
    }
  };

  render() {
    return (
        <main className="container">
          <h1 className="text-black-50 text-uppercase text-center my-4" >Professor Search Engine</h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div>Go to <a href={proxyurl}>{proxyurl}</a> to request temporary access to the demo server</div>
                <div className="mb-4">
                  <button
                      className="btn btn-primary"
                      onClick={this.createItem}
                  >
                    Enter Research Topic
                  </button>
                  {/*&nbsp;*/}
                  {/*<button*/}
                  {/*    className="btn btn-primary"*/}
                  {/*    onClick={this.createItem2}*/}
                  {/*>*/}
                  {/*  Rank by Paper*/}
                  {/*</button>*/}
                </div>
                <div>Current Query: {this.state.Q}</div>
                {/*{this.renderTabList()}*/}
                <ul className="list-group list-group-flush border-top-0">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {this.state.modal ? (
              <Modal
                  activeItem={this.state.activeItem}
                  toggle={this.toggle}
                  onSave={this.handleSubmit}
              />
          ) : null}
        </main>
    );
  }
}

export default App;