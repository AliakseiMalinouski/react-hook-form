
import './App.css';
import {useForm} from 'react-hook-form';

function App() {

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    reset();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('firstName', {
          required: "Filed is required",
          minLength: {
            value: 5,
            message: 'Min 5 symbols'
          }
        })}/><br/>
        <div>{errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}</div>
        <input type='submit' disabled={!isValid}/>
      </form>
    </div>
  );
}

export default App;
