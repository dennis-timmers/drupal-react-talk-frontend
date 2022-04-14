import Image from 'next/image'

export function Header (): JSX.Element {
  return (
    <header className="relative aspect-video w-full p-2 pt-0">
      <div className='relative block aspect-video'>
        <Image
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Landscape photo"
          layout="fill"
          className="rounded-md"
        />
      </div>
      <div className="absolute top-0 flex items-center justify-center w-full h-full">
        <h1 className="text-xl">Drupal React demo</h1>
      </div>
    </header>
  )
}