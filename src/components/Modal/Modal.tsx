import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { styles } from './Modal.styles';

import { ConfirmationModalProps } from './modal.interfaces';

/**
 * ConfirmationModal component to display a confirmation dialog.
 *
 * @param {object} props - The component's props.
 * @param {boolean} props.visible - Whether the modal is visible or not.
 * @param {Function} props.onConfirm - The function to execute when the confirmation button is pressed.
 * @param {Function} props.onCancel - The function to execute when the cancel button is pressed.
 * @param {string} props.message - The message to display in the modal.
 * @param {boolean} props.isConfirmEnabled - Whether the confirmation button is enabled or not.
 * @returns {JSX.Element} - Rendered component.
 */
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ visible, onConfirm, onCancel, message, isConfirmEnabled }) => {
  const confirmButtonStyle = isConfirmEnabled ? styles.confirmButton : { ...styles.confirmButton, backgroundColor: 'grey' };

  return (
    <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{message}</Text>

          <TouchableOpacity style={confirmButtonStyle} onPress={onConfirm} disabled={!isConfirmEnabled}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
