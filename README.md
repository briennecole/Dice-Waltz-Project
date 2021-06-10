# Dice Waltz Project Proposal

## Team Members:
- Charlie Loveall 
- Briana Staples
- Brienne Cole

## Objective:
### Summary
Create an interactive website that allows users to automatically generate short, classical music pieces by "rolling the dice" (random dice rolling generator).

#### Dataset collection
https://drive.google.com/file/d/1qnQVK17DNVkU19MgVA4Vg88zRDvwCRXw/view. - classical music files of a digital piano from numerous resources.

#### Machine Learning
Our proposal is to use a randomly generated dice rolls with a machine learning neural network to compose classical shorts. We can then test these against known classical pieces from our favorite composers.

#### Website
Deploy our interactive website using Github.io which will allows users to click the "roll dice" button to generate their own randomly composed classical short.

## Github Page
https://briennecole.github.io/Dice-Waltz-Project/


![mozart-game](https://user-images.githubusercontent.com/75045133/121566369-4a316b80-c9d2-11eb-8bee-43fff154681c.jpg)

## Some of the Process Behind the Model

The first step after importing our MIDI music file into a Machine Learning model is to convert the music notes into a computer readable numerical representation called a Note Sequence. 
Here's a NoteSequence representing "Twinkle Twinkle Little Star" that we borrowed from the Magenta repo:
TWINKLE_TWINKLE = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},  
  ],
  totalTime: 8
};
In the sequence above, those times refer to seconds (ie, play the first note for half a second). This is what magenta would refer to as an "unquantized" sequence
"In digital music processing technology, quantization is the studio-software process of transforming performed musical notes, which may have some imprecision due to expressive performance, to an underlying musical representation that eliminates the imprecision."
(https://en.wikipedia.org/wiki/Quantization_(music))

Here's an example of a quantized sequence (in this case a drum pattern) from the docs:
DRUMS = {
  notes: [
    { pitch: 36, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 38, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 46, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
    { pitch: 42, quantizedStartStep: 2, quantizedEndStep: 3, isDrum: true },
    { pitch: 42, quantizedStartStep: 3, quantizedEndStep: 4, isDrum: true },
    { pitch: 42, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 50, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
    { pitch: 36, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 38, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 42, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 45, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
    { pitch: 36, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 46, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
    { pitch: 42, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 48, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    { pitch: 50, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
  ],
  quantizationInfo: {stepsPerQuarter: 4},
  tempos: [{time: 0, qpm: 120}],
  totalQuantizedSteps: 11
};

Now that we have a quantized note sequence, we access Magentas pre-trained ML models using an API call. We decided to use the MusicRNN model which takes in a melody and continues the sequence. 
The MelodyRnn model uses a Long Short-Term Memory (LSTM) recurrent neural network. It uses basic one-hot encoding to represent extracted melodies as input to the LSTM.

"A recurrent neural network is a class of artificial neural networks that make use of sequential information. They are called recurrent because they perform the same function for every single element of a sequence, with the result being dependent on previous computations. Whereas outputs are independent of previous computations in traditional neural networks.
In this tutorial we used a Long Short-Term Memory (LSTM) network. They are a type of Recurrent Neural Network that are able to recognise and encode long-term patterns. LSTMs are extremely useful to solve problems where the network has to remember information for a long period of time as is the case in music and text generation."
(https://towardsdatascience.com/how-to-generate-music-using-a-lstm-neural-network-in-keras-68786834d4c5)






