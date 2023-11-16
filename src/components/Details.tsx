import { useParams } from 'react-router-dom';
import { IPeople } from '../models';
import { useContext, useEffect, useState } from 'react';
import { IResultsListContext, ResultsListContext } from '../AppContext';

export function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState({} as IPeople);
  const [success, setSuccess] = useState(true);
  const { getResourceById } = useContext(
    ResultsListContext
  ) as IResultsListContext;

  useEffect(() => {
    getResourceById(id || '').then((responseObj) => {
      setSuccess(responseObj.success);
      if (responseObj.result) {
        setDetails(responseObj.result);
      }
    });
  }, [setDetails, getResourceById, id]);
  return (
    <div className="modal">
      <div className='modal-content'>
        <h2>Element Id: {id}</h2>
        {success ? (
          <ul>
            <li>Created: {details.created}</li>
            <li>Edited: {details.edited}</li>
            <li>Eye_Color: {details.eye_color}</li>
            <li>
              Films:{' '}
              {details.films?.map((film, i) => (
                <li key={i}>{film}</li>
              ))}
            </li>
            <li>Gender: {details.gender}</li>
            <li>Hailr_Color: {details.hair_color}</li>
            <li>Homeworld: {details.homeworld}</li>
            <li>Skin_Color: {details.skin_color}</li>
          </ul>
        ) : (
          <p>Sorry What you are looking for not found</p>
        )}
      </div>
    </div>
  );
}
