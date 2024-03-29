import { useState, useEffect, useCallback } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/modules/App.module.css'

// Custom Hooks
import { useAppContext } from '../src/context/useAppContext'

// Components
import { Header } from '../src/components/Header/Header'
import { Popup } from '../src/components/Popup'
import { Board } from '../src/components/Board/Board'
import { Sidebar } from '../src/components/Sidebar/Sidebar'
import { Overlay } from '../src/components/Overlay'

// Initial State Values
import { initPopupState } from '../lib/initialStates'

type SubtaskEditType = {
  id: number
}
const initialSubtaskEditKey: SubtaskEditType = {
  id: -1,
}

const Home: NextPage = ({ user, savedKanban }: any) => {
  let {
    actionKanban,
    actionBoard,
    toggleTheme,
    theme,
    board,
    handleActiveBoard,
    boardList,
    updateUserId,
    userId,
  } = useAppContext()

  // TODO add character limit
  const [isMobile, setIsMobile] = useState<boolean>(true)
  const [isPopupOpen, setIsPopupOpen] = useState(initPopupState)
  const [subtaskEditKey, setSubtaskEditKey] = useState<SubtaskEditType>(
    initialSubtaskEditKey
  )
  const [isHidden, setIsHidden] = useState(true)
  const [isSavedKanbanLoaded, setIsSavedKanbanLoaded] = useState(false)

  let { id: taskId } = subtaskEditKey
  // TODO should be able to simplify
  // also, below may return undefined
  // do i need safety check or can i use to my advantage?
  // i am using id property but some places i refer to it as index
  let t = board.tasks.find((task) => task.id == taskId)!
  let nextTaskId =
    board.tasks.length > 0
      ? Math.max(...board.tasks.map((task) => task.id)) + 1
      : 1

  let updateSubtaskEditKey = (id: number) => {
    setSubtaskEditKey((prevState) => {
      return {
        ...prevState,
        id,
      }
    })
  }

  let isOpen = (openBoard = false, isNewBoard = false) => {
    let key: keyof typeof initPopupState
    for (key in isPopupOpen) {
      if (key == 'boardPopup') {
        if (isPopupOpen[key].isOpen) {
          return true
        }
      } else if (key == 'removePopup') {
        if (isPopupOpen[key].isBoard || isPopupOpen[key].isTask) {
          return true
        }
      } else if (isPopupOpen[key]) {
        return true
      }
    }
    return false
  }

  let openPopup = (key: string, isNewBoard = false, objToDelete = '') => {
    setIsPopupOpen((prevState) => {
      let value = key == 'sidebarPopup' ? !prevState[key] : true
      if (key == 'boardPopup') {
        return {
          ...prevState,
          boardPopup: {
            isOpen: true,
            isNew: isNewBoard,
          },
        }
      }
      if (key == 'removePopup') {
        return {
          ...prevState,
          removePopup: {
            isTask: objToDelete == 'task',
            isBoard: objToDelete == 'board',
          },
        }
      }
      return {
        ...prevState,
        [key]: value,
      }
    })
  }
  let closePopup = (exception: boolean = false) => {
    setIsPopupOpen(initPopupState)
    if (!exception) {
      // when editing Board or Task
      setSubtaskEditKey(initialSubtaskEditKey)
    }
  }
  let toggleHidden = () => {
    setIsHidden((pre) => !pre)
  }

  let getExistingKanban = () => {
    if (!isSavedKanbanLoaded && savedKanban !== null) {
      let { boards } = savedKanban
      actionBoard('INITIALIZE BOARD', '', boards[0])
      actionKanban('INITIALIZE KANBAN', '', boards)
      setIsSavedKanbanLoaded(true)
    }
  }

  let checkKanbanExists = useCallback(() => {
    if (user.id && !userId) {
      updateUserId(user.id)
      getExistingKanban()
    }
    // not concerned about others deps
  }, [userId]) // eslint-disable-line react-hooks/exhaustive-deps
  let updateKanban = useCallback(() => {
    actionKanban('UPDATE BOARD', '', board)

    //actionKanban returns new state each time
  }, [board]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    checkKanbanExists()
    updateKanban()

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [checkKanbanExists, updateKanban])

  return (
    <div className={`${styles.app}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header
          theme={theme}
          isMobile={isMobile}
          openPopup={openPopup}
          isSidebarOpen={isPopupOpen.sidebarPopup || !isHidden}
          board={board}
          closePopup={closePopup}
        />
      </header>
      {
        <Overlay
          isOpen={isOpen}
          closePopup={closePopup}
          isMobile={isMobile}
          isSidebar={isPopupOpen.sidebarPopup}
        />
      }
      <main className={`${styles.main} ${!isHidden && styles.columns}`}>
        {isOpen() && (
          <div className={`${styles.popupWrapper}`}>
            <Popup
              theme={theme}
              actionKanban={actionKanban}
              actionBoard={actionBoard}
              board={board}
              boardList={boardList}
              boardName={!isPopupOpen.boardPopup.isNew && board.name}
              handleActiveBoard={handleActiveBoard}
              closePopup={closePopup}
              openPopup={openPopup}
              task={isPopupOpen.removePopup.isTask && t}
              taskObj={t}
              nextTaskId={nextTaskId}
              isPopupOpen={isPopupOpen}
            />
          </div>
        )}
        <div>
          {((isMobile && isPopupOpen.sidebarPopup) || !isMobile) && (
            <Sidebar
              isMobile={isMobile}
              theme={theme}
              toggleTheme={toggleTheme}
              boardList={boardList}
              board={board}
              handleActiveBoard={handleActiveBoard}
              openPopup={openPopup}
              closePopup={closePopup}
              isHidden={isHidden}
              toggleHidden={toggleHidden}
            />
          )}
        </div>
        <Board
          theme={theme}
          board={board}
          openPopup={openPopup}
          updateSubtaskEditKey={updateSubtaskEditKey}
          isHidden={isHidden}
          isMobile={isMobile}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  let { PrismaClient } = require('@prisma/client')
  let { authOptions } = require('./api/auth/[...nextauth]')
  let { unstable_getServerSession } = require('next-auth/next')

  const prisma = new PrismaClient()
  let session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
  let user = session === null ? {} : session.user

  let savedKanban
  if (user.id) {
    try {
      savedKanban = await prisma.kanban.findFirst({
        where: {
          userId: user.id,
        },
        select: {
          boards: true,
        },
      })
    } catch (e) {
      console.error(e)
      return
    }
  }

  return {
    props: {
      user,
      savedKanban,
    },
  }
}

export default Home
