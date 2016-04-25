import React from 'react';

export default class Editable extends React.Component {
    render() {
        const {value, onEdit, onValueClick, editing, ...props} = this.props;
        return (
            <div {...props}>
                {editing ? this.renderEdit() : this.renderValue()}
            </div>
        );
    }

    renderEdit = () => {
        return <input type="text"
                      ref={
        (e) => e ? e.selectionStart = this.props.value.length : null
      }
                      autoFocus={true}
                      defaultValue={this.props.value}
                      onBlur={this.finishEdit}
                      onKeyPress={this.checkEnter} />;
    };
    renderValue = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.props.onValueClick}>
                <span className="value">{this.props.value}</span>
                {onDelete ? this.renderDelete() : null }
            </div>
        );
    };
}