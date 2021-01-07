import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import Handle from './Handle'
import Track from './Track'

import utils from '../../styles/utils.module.css'
import styles from './Budget.module.css'

const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 80,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 8,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#d8d8d8',
}

export default function Budget() {
  return (
    <div>
      {/* <img src="/testback-5.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>Budget & Lease Length</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={utils.primary_title}>Budget & Lease Length</h1>
          <h2 className={utils.secondary_title}>
            Please select a price range and lease length you are comfortable with.
          </h2>

          <div className={styles.slider_container}>
            <Slider className={styles.budget_slider} rootStyle={sliderStyle} domain={[850, 1250]} step={1} mode={2} values={[900, 1150]}>
              <Rail>
                {({ getRailProps }) => (
                  <div style={railStyle} {...getRailProps()} />
                )}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map(handle => (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                        budget
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
            </Slider>

            <Slider className={styles.time_slider} rootStyle={sliderStyle} domain={[4, 18]} step={1} mode={2} values={[6, 15]}>
              <Rail>
                {({ getRailProps }) => (
                  <div style={railStyle} {...getRailProps()} />
                )}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map(handle => (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
            </Slider>
          </div>

          <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
            <div className={styles.back_btn}>
              <MyButton width="100%" height="50px" margin="0">BACK</MyButton>
            </div>
            <div className={styles.next_btn}>
              <MyButton blue width="100%" height="50px" margin="0">NEXT</MyButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}