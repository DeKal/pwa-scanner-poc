import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
import { QrScannerProps } from 'types/props'

const QrScanner = ({ mode, setQrCode }: QrScannerProps): ReactElement => (
  <div className="d-flex justify-content-center">
    <QrReader
      delay={300}
      onError={(err) => {
        console.error(err)
      }}
      onScan={(data) => {
        if (data) {
          setQrCode(data)
        }
      }}
      style={styles.qrContainer}
      facingMode={mode}
    />
  </div>
)

const styles = {
  qrContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '12px',
  },
}

export default QrScanner
QrScanner.defaultProps = {
  mode: 'environment',
  setQrCode: () => {},
}
QrScanner.propTypes = {
  mode: PropTypes.string,
  setQrCode: PropTypes.func,
}
