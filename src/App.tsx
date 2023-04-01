import React from 'react';
import NavigationBar from './components/NavigationBar';
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <NavigationBar />
      </header>
    </>
  )
}

export default App
