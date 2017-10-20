import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{

   /* constructor(){

        super();
        this.goToStore = this.goToStore.bind(this);
    }*/


    goToStore(event){

         event.preventDefault();
         const storeId = this.storeInput.value;
         console.log('Going to {storeId}');
         this.context.router.transitionTo('/store/${storeId}');

        //console.log('You changed the URL')
        // First grab the text from the box
        // going to transition from /to/store/:storeId



    }


    render(){

        //Outside JSS comment can be like this

        return  (

           <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>

            {/* Comment should be like this */}
              <h2>Please Enter a Store</h2>
              <input type="text"  required placeholder="Store Name"
                 defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}/>

              <button type="Submit">Visit Store</button>

            </form>

        )
    }

}


StorePicker.contextTypes = {

    router: React.PropTypes.object

}

export default StorePicker;