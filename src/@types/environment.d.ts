declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_ID: string // this is the line you want
      GITHUB_SECRET: string
      NODE_ENV: 'development' | 'production'
      // PORT?: string
      // PWD: string
    }
  }
}

export {}
