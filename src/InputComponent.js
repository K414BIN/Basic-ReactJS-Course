const  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        console.log('enter press here! ');
    }
}
const  InputComponent = (props) =>{

    return(<div>
            <input type="text" required value={props.value}
                  onChange={(d) => props.onChange(d.target.value)}
                  onKeyDown={this.add}
            />
            </div>
            );
};

export default InputComponent;