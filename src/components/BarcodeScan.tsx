import React, { ReactElement, useEffect } from 'react'
import Quagga from 'quagga'
import PropTypes from 'prop-types'
const BarcodeScan = ({ onDetected }): ReactElement => {
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
          return console.log(err)
        }
        Quagga.start()
      }
    )
    Quagga.onDetected(_onDetected)
    return () => {
      Quagga.offDetected(_onDetected)
    }
  }, [])
  const _onDetected = (result) => {
    onDetected(result)
  }
  return <div id="interactive" className="viewport" />
}
export default BarcodeScan
BarcodeScan.defaultProps = {
  onDetected: () => {},
}
BarcodeScan.propTypes = {
  onDetected: PropTypes.func,
}
