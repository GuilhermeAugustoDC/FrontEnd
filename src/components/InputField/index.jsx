import React from 'react';
import './style.css';

const InputField = ({
	name,
	placeholder,
	type,
	className,
	value,
	onChange,
}) => {
	return (
		<input
			name={name}
			placeholder={placeholder}
			type={type}
			className={className}
			value={value}
			onChange={onChange}
		/>
	);
};

export default InputField;
