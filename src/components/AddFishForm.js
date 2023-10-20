import React from "react";
import PropTypes from "prop-types";
 

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusref = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    };
    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusref.current.value,
            desc: this.descRef.current.value,
            imag: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        // Refresh the form
        event.currentTarget.reset();


    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="Name" ref={this.nameRef}  type="text" placeholder="Name"/>
                <input name="Price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="Status" ref={this.statusref}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="Desc" ref={this.descRef} type="text" placeholder="Desc"/>
                <input name="Image" ref={this.imageRef} type="text" placeholder="Image"/>
                <button type="sumbit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;