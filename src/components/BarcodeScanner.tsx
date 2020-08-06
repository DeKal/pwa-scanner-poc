import React, { ReactElement, useEffect } from 'react'
import Quagga from 'quagga'
import PropTypes from 'prop-types'
import { ProductScanProps } from 'types/props'
const BarcodeScanner = ({ onDetected }: ProductScanProps): ReactElement => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment', // or user
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      function (err) {
        if (err) {
          return
        }
        Quagga.start()
      }
    )
    Quagga.onDetected(onDetected)
    return () => {
      Quagga.offDetected(onDetected)
    }
  }, [onDetected])
  return <div id="interactive" className="viewport" />
}
export default BarcodeScanner
BarcodeScanner.defaultProps = {
  onDetected: () => {},
}
BarcodeScanner.propTypes = {
  onDetected: PropTypes.func,
}
