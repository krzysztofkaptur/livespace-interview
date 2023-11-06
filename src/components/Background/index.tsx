import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, ISourceOptions } from "tsparticles-engine"

import particles from '@/assets/particlesjs-config.json'

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return <Particles
      id="tsparticles"
      init={particlesInit}
      options={particles as ISourceOptions} />
}
