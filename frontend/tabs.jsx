import React from 'react';

class Tabs extends React.Component {
 constructor(props) {

   super(props);
   this.state = {
     index: 0,
     paragraph: this.props.objects[0].content
    };
 }

 render() {

   return(
     <div className="tab-container">

       <h1>Tabs</h1>
       <ul className="tab-list">

         { this.props.objects.map( (tab, i) => (
            <div key={tab.title} className="tab" onClick={this.updateSelectedTab.bind(this, i)}>
              <div className="tabs-header">
                <h3>{tab.title}</h3>
              </div>
            </div>
          ))}

        </ul>

        <div className="tab-content">
          <p>{this.state.paragraph}</p>
        </div>

     </div>
   );

 }

 updateSelectedTab(index) {
   this.setState( { index }, this.updateContent.bind(this, index));
 }

 updateContent() {
   this.setState({paragraph: this.props.objects[this.state.index].content});
 }

}



export default Tabs;
