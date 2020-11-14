import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
      min: ['5', 'Question should contain more than 5 characters.'],
      max: ['100', 'Question should be shorter than 100 characters'],
    },
    user: {
      type: String,
    },
    answers: [
      {
        answer: String,
        votes: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
/* 
Wat de fok

pollSchema.pre('save', function (next) {
  this.slug = slugify.apply(this.question, { lower: true });
  next();
});

*/

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;

// TODO: Usikker på om jeg vil ha med min og max, får se an
