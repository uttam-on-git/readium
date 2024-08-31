import { Hono } from 'hono'
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';

const app = new Hono<{
  Bindings: {
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app

// postgresql://7388dexter.pir:kvOdIqa7DLe5@ep-patient-salad-90413788.us-east-2.aws.neon.tech/uttamdb?sslmode=require
