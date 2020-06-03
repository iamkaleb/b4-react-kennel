import React, { useEffect, useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
import EmployeeManager from '../../modules/EmployeeManager';

const AnimalForm = props => {

    const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: ""});
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const getEmployees = () => {
        return EmployeeManager.getAll().then(emps => {
          setEmployees(emps)
        });
      }

    const handleFieldChange = evt => {
        const stateToChange = {...animal};
        if (parseInt(evt.target.value)) {
            stateToChange[evt.target.id] = parseInt(evt.target.value);
          } else {
            stateToChange[evt.target.id] = evt.target.value;
          }
          setAnimal(stateToChange);
    };

    const constructNewAnimal = evt => {
        evt.preventDefault();
        if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
            window.alert("Please input an animal name, breed, and caretaker");
        } else {
            setIsLoading(true);
            AnimalManager.post(animal)
                .then(() => props.history.push("/animals"));
        }
    };

    useEffect(() => {getEmployees()}, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Animal name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                        <select
                            value={animal.employeeId}
                            id="employeeId"
                            onChange={handleFieldChange}
                        >
                            <option value="">Please choose a caretaker</option>
                            {employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}</option>)}
                        </select>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AnimalForm