import { TensorScriptOptions, TensorScriptProperties, Matrix, TensorScriptLayers } from './model_interface';
import { BaseNeuralNetwork } from './base_neural_network';
/**
 * Deep Learning Classification with Tensorflow
 * @class DeepLearningClassification
 * @implements {BaseNeuralNetwork}
 */
export declare class DeepLearningClassification extends BaseNeuralNetwork {
    /**
     * @param {{layers:Array<Object>,compile:Object,fit:Object}} options - neural network configuration and tensorflow model hyperparameters
     * @param {{model:Object,tf:Object,}} properties - extra instance properties
     */
    constructor(options: TensorScriptOptions | undefined, properties: TensorScriptProperties);
    /**
     * Adds dense layers to tensorflow classification model
     * @override
     * @param {Array<Array<number>>} x_matrix - independent variables
     * @param {Array<Array<number>>} y_matrix - dependent variables
     * @param {Array<Object>} layers - model dense layer parameters
     */
    generateLayers(x_matrix: Matrix, y_matrix: Matrix, layers?: TensorScriptLayers): void;
}
