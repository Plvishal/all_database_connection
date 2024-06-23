import app from './app.js';
import { connectMS } from './msConfig/msConfig.js';
connectMS();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on the port ${process.env.PORT}`);
});
