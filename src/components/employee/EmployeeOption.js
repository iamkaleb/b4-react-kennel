import React from  'react';

const EmployeeOption = props => {
    return (
        `<option value="${props.employee.id}">${props.employee.name}</option>`
    )
}