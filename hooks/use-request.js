import axios from "axios";
import { useState } from "react";

export default ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState(null);
    
    const doRequest = () => {
        setErrors(null);
        const response = axios[method](url, body)
            .catch(err => {
                setErrors(
                    <div className="alert alert-danger">
                        <h4>Oops...</h4>
                        <ul>
                            {err.response.data.errors.map(err => (<li key={err.message}>{err.message}</li>))}
                        </ul>
                    </div>
                );
            })
            .then( res =>
                onSuccess(res.data)
            );
        return response.data;
    };
    return {doRequest, errors};
};

