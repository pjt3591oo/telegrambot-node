var tf = require('@tensorflow/tfjs')
// Tiny TFJS train / predict example.
async function myFirstTfjs() {
    const shape = [2, 3]; // 2 rows, 3 columns
    const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
    a.print()
}

myFirstTfjs();