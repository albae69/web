import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Float, OrbitControls, Sparkles, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import reactLogo from '../assets/react.svg'
import goLogo from '../assets/go.svg'
import flutterLogo from '../assets/flutter.svg'
import awsLogo from '../assets/aws.svg'

const ICONS = [
  { label: 'React', logo: reactLogo },
  { label: 'Go', logo: goLogo },
  { label: 'Flutter', logo: flutterLogo },
  { label: 'AWS', logo: awsLogo },
]

function roundedRectShape(w: number, h: number, r: number) {
  const s = new THREE.Shape()
  const x = -w / 2
  const y = -h / 2
  s.moveTo(x, y + r)
  s.lineTo(x, y + h - r)
  s.quadraticCurveTo(x, y + h, x + r, y + h)
  s.lineTo(x + w - r, y + h)
  s.quadraticCurveTo(x + w, y + h, x + w, y + h - r)
  s.lineTo(x + w, y + r)
  s.quadraticCurveTo(x + w, y, x + w - r, y)
  s.lineTo(x + r, y)
  s.quadraticCurveTo(x, y, x, y + r)
  return s
}

function Photo() {
  const tex = useTexture('/profile-400.webp')
  tex.colorSpace = THREE.SRGBColorSpace
  const geom = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(roundedRectShape(2.3, 2.3, 0.3), {
      depth: 0.08,
      bevelEnabled: false,
      curveSegments: 12,
    })
    g.center()
    g.computeBoundingBox()
    const bb = g.boundingBox!
    const size = new THREE.Vector3()
    bb.getSize(size)
    const pos = g.attributes.position
    const uv = g.attributes.uv
    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, (pos.getX(i) - bb.min.x) / size.x, (pos.getY(i) - bb.min.y) / size.y)
    }
    return g
  }, [])
  return (
    <mesh geometry={geom}>
      <meshBasicMaterial attach="material-0" map={tex} toneMapped={false} />
      <meshBasicMaterial attach="material-1" color="#27272a" />
    </mesh>
  )
}

function LogoChip({ logo }: { logo: string }) {
  const tex = useTexture(logo)
  tex.colorSpace = THREE.SRGBColorSpace
  return (
    <mesh>
      <planeGeometry args={[0.7, 0.7]} />
      <meshBasicMaterial map={tex} transparent toneMapped={false} depthWrite={false} />
    </mesh>
  )
}

function LogoItem({
  base,
  logo,
  index,
  hovered,
  onHover,
}: {
  base: [number, number, number]
  logo: string
  index: number
  hovered: number | null
  onHover: (i: number | null) => void
}) {
  const ref = useRef<THREE.Group>(null)
  const dir = useMemo(() => new THREE.Vector3(...base).normalize(), [base])
  const push = useRef(0)
  useFrame((_, dt) => {
    if (!ref.current) return
    const active = hovered === index
    ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, active ? 1.7 : 1, 8, dt))
    push.current = THREE.MathUtils.damp(push.current, active ? 0.55 : 0, 8, dt)
    ref.current.position.set(
      base[0] + dir.x * push.current,
      base[1] + dir.y * push.current,
      base[2] + dir.z * push.current,
    )
  })
  return (
    <group
      ref={ref}
      position={base}
      onPointerOver={(e) => {
        e.stopPropagation()
        onHover(index)
      }}
      onPointerOut={() => onHover(null)}
      onPointerDown={(e) => {
        e.stopPropagation()
        onHover(index)
      }}
    >
      <Billboard>
        <Float speed={3} floatIntensity={0.35} rotationIntensity={0}>
          <LogoChip logo={logo} />
        </Float>
      </Billboard>
    </group>
  )
}

function OrbitRing({ hovered, onHover }: { hovered: number | null; onHover: (i: number | null) => void }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.z += dt * 0.12
  })
  return (
    <group rotation={[0.5, 0, 0]}>
      <group ref={ref}>
        {ICONS.map((icon, i) => {
          const a = (i / ICONS.length) * Math.PI * 2
          return (
            <LogoItem
              key={icon.label}
              base={[Math.cos(a) * 1.95, Math.sin(a) * 1.95, 0]}
              logo={icon.logo}
              index={i}
              hovered={hovered}
              onHover={onHover}
            />
          )
        })}
      </group>
    </group>
  )
}

export default function AvatarOrbit() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 pointer-events-none lg:pointer-events-auto">
      <div className="absolute bottom-2 right-2 w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl" />
      <div className="absolute top-2 left-2 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl" />
      <Canvas
        className="absolute inset-0"
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0.6, 6.8], fov: 40 }}
        dpr={[1, 2]}
        onPointerMissed={() => setHovered(null)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 5, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <Photo />
          <OrbitRing hovered={hovered} onHover={setHovered} />
        </Suspense>
        <Sparkles count={24} scale={[5, 5, 2]} size={4} speed={0.4} color="#10b981" opacity={0.5} />
        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.0}
          minPolarAngle={1.0}
          maxPolarAngle={1.9}
        />
      </Canvas>
    </div>
  )
}
