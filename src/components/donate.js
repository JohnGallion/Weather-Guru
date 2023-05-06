import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N4beQBhQeN7Lv1gdGfhAvNmxqlzXr5OAgcHKAulIjITE9psawJMQ4EJVdUs6ZFRcmT0WUdQ9uo9yzwAUqQNuWHR00zFbyyp4a');

export  function App(props) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Donate {...props}/>
    </Elements>
  );
};
const Donate = (props) => {
    const stripe = useStripe();
    const elements = useElements();
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default Donate;
