const links = ['https://developer.mozilla.org/es/docs/Web/CSS/Comments']

export default function Page() {
  return (
    <div>
      <ul>
        {links.map(link => (
          <li>
            <a href={link} target="_blank">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

Page.layout = 'Course'
Page.lesson = 'comentarios'
Page.page = 'Referencias'
