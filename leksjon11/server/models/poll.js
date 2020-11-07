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
    answers: [
      {
        answers: String,
        correct: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

pollSchema.pre('save', function (next) {
  this.slug = slugify.apply(this.question, { lower: true });
  next();
});

const Poll  = mongoose.model('Poll', pollSchema);

export default Poll;

// TODO: Usikker på om jeg vil ha med min og max, får se an
