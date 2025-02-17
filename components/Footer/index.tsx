import messages from '@/json/footer_messages.json';

const Footer = () => {
  return (
    <div className="w-full grid place-items-center py-3">
        <h4 className="text-center px-5">{messages[Math.floor(Math.random() * messages.length)]}</h4>
        <h4 className="text-center px-5">
          The Source Code for this site can be found on {""}
          <a className="text-blue-400 hover:underline" href="https://github.com/Vidyut01/Vidyut-Portfolio">
            GitHub
          </a>
        </h4>
    </div>
  )
}

export default Footer