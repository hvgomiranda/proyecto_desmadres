import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1500}
    viewBox="0 0 1125 375"
    height={500}
    {...props}
  >
    <path d="M47.454 222.78h51.234c35.098 0 59.016-18.54 59.016-49.391 0-31.277-23.637-49.676-58.59-49.676h-51.66Zm49.96-77.415c18.114 0 28.587 9.2 28.587 28.165 0 18.68-10.473 27.878-28.586 27.878h-19.25v-56.043ZM164.778 222.78h95.957v-20.52H195.49v-19.816h49.11V162.35h-49.11v-17.692h65.246v-20.945h-95.957ZM323.854 224.9c32.836 0 52.222-13.019 52.222-32.124 0-23.352-27.597-27.313-49.816-30.711-15.144-2.266-27.879-4.246-27.879-11.746 0-4.954 5.52-9.059 19.953-9.059 14.578 0 24.203 5.805 26.61 15.57h29.433c-3.68-22.363-24.48-35.242-57.031-35.242-31.563 0-50.242 12.738-50.242 31.563 0 23.207 26.324 27.312 48.402 30.425 15.848 2.266 29.438 4.106 29.438 12.172 0 5.239-6.512 9.48-21.938 9.48-15.285 0-23.777-5.234-26.043-16.132h-30.71c3.964 22.926 24.202 35.805 57.6 35.805ZM396.263 216.536l2.875.281c.52.047.66.332.566.899-.473 2.308-1.508 6.035-3.539 12.828-1.742 5.758-3.207 10.617-4.434 13.73-.375 1.035-.894 1.227-1.554 1.32l-2.266.235-.14.566c.94 0 4.199-.14 6.18-.14 2.026 0 5.14.14 6.46.14l.191-.566c-.898-.094-2.171-.234-3.019-.375-.852-.094-1.133-.379-.945-1.227.8-3.351 2.027-7.738 3.445-12.597.52-.047 2.168-.047 4.055-.047 4.246 0 4.625 1.18 3.918 5.566h.52c.612-2.734 2.12-8.02 3.066-10.379l-.52-.14c-1.512 3.539-2.691 4.152-6.512 4.152-1.886 0-3.726 0-4.199-.094 1.371-4.765 3.305-11.277 3.965-13.164.187-.52.613-.66 1.18-.66h3.68c4.859 0 5.519.379 5.613 2.406 0 1.367-.239 3.399-.473 4.672h.613c.38-1.18 1.32-4.672 2.735-8.21-2.356.331-5.282.378-8.633.378h-5.801c-2.121 0-5.426-.14-6.793-.14ZM429.897 239.321h-.282c-1.511 3.867-4.199 6.227-7.644 6.227-2.594 0-3.54-1.98-3.54-4.72 0-1.273.24-2.925.474-4.007 2.453-.379 6.699-1.371 9.011-2.55 1.508-.66 3.442-1.84 3.442-3.962 0-2.218-1.082-4.48-4.907-4.48-2.12 0-4.386.707-6.273 2.215-3.82 3.16-5.895 8.351-5.895 12.597 0 3.914 1.934 6.227 5.754 6.227 4.246 0 7.926-2.453 9.953-5.852Zm-3.867-12.785c1.18 0 1.933 1.039 1.933 2.828 0 2.078-.945 4.106-2.879 5.05-1.367.567-3.914 1.227-5.945 1.509 2.172-7.786 5.098-9.387 6.797-9.387ZM447.542 225.782l-1.227 1.793c-.52-.805-2.172-1.746-4.39-1.746-1.887 0-3.395.422-4.715 1.555-1.465 1.273-2.266 2.925-2.266 4.859 0 1.934.848 3.207 2.219 4.246 1.32 1.133 3.066 2.594 3.96 3.445.852.801 1.087 1.508 1.087 2.547-.047 2.594-2.075 3.68-4.2 3.68-2.879 0-4.718-1.559-4.574-4.531.047-.989.281-2.547.516-3.301l-.563.14c-.758 2.88-1.652 5.52-2.172 6.7 1.414.945 4.012 1.699 6.227 1.699 2.547 0 4.578-.8 5.945-2.027 1.133-.946 2.121-2.5 2.121-4.485 0-1.98-.66-2.969-2.12-4.101-1.18-.946-3.114-2.5-4.106-3.399-.848-.754-1.227-1.508-1.227-2.734 0-2.078 1.465-3.633 3.54-3.633 2.972 0 4.245 2.453 3.3 6.793l.567-.094c.566-2.36 1.464-4.906 2.406-7.031ZM459.382 240.356c-.851 2.313-3.066 5.285-5.379 5.285-1.086 0-1.273-.66-1.039-1.699.946-4.055 3.774-13.3 4.766-16.418l4.766-.281.472-.66h-4.906c.8-2.5 1.887-5.946 2.215-6.887-1.04.422-2.926.941-4.434 1.086-.472 1.602-1.039 3.629-1.7 5.8h-3.16l-.378.661 3.258.281c-1.18 3.918-3.211 10.524-4.485 14.817-.847 2.734-.468 4.527 2.739 4.527 2.687 0 5.847-1.7 7.64-5.379ZM471.411 216.677a2.537 2.537 0 0 0-2.5 2.5c-.047 1.273.801 2.027 1.84 2.027 1.274 0 2.406-.942 2.453-2.406.047-1.274-.613-2.121-1.746-2.121Zm-7.644 10.847c1.039-.047 2.312 0 2.832 0s.52.238.379.711c-1.04 3.774-3.164 10.328-4.34 14.008-.852 2.55-.852 4.625 1.84 4.625 3.066 0 5.754-2.547 7.214-5.426l-.421-.566c-.993 2.172-3.211 4.433-4.766 4.433-.473 0-.613-.375-.379-1.46.992-4.008 4.293-14.72 5.66-17.88l-.094-.14c-1.98.613-5.472.941-7.687 1.133ZM475.75 227.524c.566 0 .757.192.804.711.235 3.067-.144 11.606-.473 18.633.754-.188 1.887-.426 2.688-.426 2.5-2.828 9.246-10.992 11.512-14.765.992-1.649 1.367-2.973 1.367-3.961 0-1.18-.281-2.22-.567-2.22-.375 0-1.601.52-2.406 1.04.047.566.098 1.226.047 2.074-.281 4.672-4.762 10.852-8.633 15.004 0-2.172.047-5 .145-7.219.14-4.246.234-7.691.8-10.566-2.218.707-4.718.894-7.218 1.133l-.188.562ZM512.782 240.876c-.941 1.98-2.687 4.34-4.246 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.954-16.98h-3.867l-.52 1.788c-.328-1.414-1.508-2.308-3.726-2.308-1.649 0-3.395.52-5.329 1.793-4.484 3.02-7.691 9.906-7.691 14.812 0 2.641 1.039 4.434 3.633 4.434 4.199 0 7.691-3.914 9.578-6.746.047-.047.094 0 .094-.047-.141.66-.426 1.508-.567 2.121-.52 1.746-1.039 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.793 1.699c0-3.867 2.168-9.813 5.14-13.398 1.606-1.934 2.927-2.5 4.34-2.5 1.56 0 2.266 1.039 2.266 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.214 6.84-1.325 0-1.7-1.414-1.7-2.594ZM519.81 214.977l2.36.047c.613.047.805.14.66.66-.707 2.973-1.414 5.567-3.867 13.73-1.606 5.376-2.734 9.009-3.914 12.927-.567 1.84-1.04 4.527 1.98 4.527 2.735 0 5.567-2.172 7.313-5.426l-.426-.566c-1.18 2.453-3.445 4.34-4.672 4.34-.66 0-.754-.47-.469-1.649.567-2.55 1.696-6.558 3.915-14.058 2.312-7.786 4.058-13.399 5.093-15.946-1.742.473-4.86.848-7.781.848ZM554.863 240.876c-.895 2.031-2.973 4.386-4.293 4.386-.754 0-.567-1.035-.328-2.074.375-1.652 1.129-4.433 2.214-8.304 2.641-9.434 5.52-18.395 6.606-21.32-1.606.374-5.66.753-8.066.8l-.239.613c1.227 0 2.266 0 2.88.047.425 0 .566.238.425.754-.285 1.418-1.559 5.945-3.445 12.078-.614-1.32-2.028-2.027-4.102-2.027-2.266 0-4.152.8-5.805 1.98-4.34 3.067-7.265 9.059-7.265 14.106 0 2.832 1.133 4.953 3.965 4.953 4.48 0 8.02-3.961 9.765-6.84a50.341 50.341 0 0 0-.52 1.746c-.804 2.973-.519 5.14 1.65 5.14 3.019 0 5.425-2.405 6.937-5.472Zm-17.22 1.465c0-4.907 2.595-10.57 5.24-13.493 1.366-1.464 2.734-2.265 4.34-2.265 1.98 0 2.5 1.605 2.5 2.972 0 1.98-1.56 6.653-3.067 9.247-2.313 4.007-4.907 6.507-6.985 6.507-1.414 0-2.027-1.414-2.027-2.922ZM572.837 239.321h-.281c-1.512 3.867-4.2 6.227-7.645 6.227-2.594 0-3.539-1.98-3.539-4.72 0-1.273.238-2.925.473-4.007 2.453-.379 6.699-1.371 9.011-2.55 1.508-.66 3.442-1.84 3.442-3.962 0-2.218-1.082-4.48-4.906-4.48-2.122 0-4.387.707-6.274 2.215-3.82 3.16-5.894 8.351-5.894 12.597 0 3.914 1.933 6.227 5.754 6.227 4.246 0 7.925-2.453 9.953-5.852Zm-3.867-12.785c1.18 0 1.933 1.039 1.933 2.828 0 2.078-.945 4.106-2.879 5.05-1.367.567-3.914 1.227-5.945 1.509 2.172-7.786 5.098-9.387 6.797-9.387ZM588.309 214.977l2.359.047c.613.047.805.14.66.66-.707 2.973-1.414 5.567-3.867 13.73-1.605 5.376-2.734 9.009-3.914 12.927-.566 1.84-1.04 4.527 1.98 4.527 2.735 0 5.567-2.172 7.313-5.426l-.426-.566c-1.18 2.453-3.445 4.34-4.672 4.34-.66 0-.754-.47-.469-1.649.567-2.55 1.696-6.558 3.915-14.058 2.312-7.786 4.058-13.399 5.093-15.946-1.742.473-4.86.848-7.78.848ZM603.737 216.677a2.537 2.537 0 0 0-2.5 2.5c-.047 1.273.8 2.027 1.84 2.027 1.273 0 2.406-.942 2.453-2.406.047-1.274-.613-2.121-1.746-2.121Zm-7.645 10.847c1.04-.047 2.313 0 2.833 0 .519 0 .519.238.378.711-1.039 3.774-3.164 10.328-4.34 14.008-.851 2.55-.851 4.625 1.84 4.625 3.067 0 5.754-2.547 7.215-5.426l-.422-.566c-.992 2.172-3.21 4.433-4.765 4.433-.473 0-.614-.375-.38-1.46.993-4.008 4.294-14.72 5.661-17.88l-.094-.14c-1.98.613-5.472.941-7.687 1.133ZM616.286 240.356c-.851 2.313-3.066 5.285-5.379 5.285-1.086 0-1.273-.66-1.039-1.699.946-4.055 3.774-13.3 4.766-16.418l4.765-.281.473-.66h-4.906c.8-2.5 1.887-5.946 2.215-6.887-1.04.422-2.926.941-4.434 1.086-.473 1.602-1.039 3.629-1.7 5.8h-3.16l-.378.661 3.258.281c-1.18 3.918-3.211 10.524-4.485 14.817-.847 2.734-.468 4.527 2.739 4.527 2.687 0 5.847-1.7 7.64-5.379ZM634.542 239.321h-.282c-1.511 3.867-4.199 6.227-7.644 6.227-2.594 0-3.54-1.98-3.54-4.72 0-1.273.24-2.925.474-4.007 2.453-.379 6.699-1.371 9.011-2.55 1.508-.66 3.442-1.84 3.442-3.962 0-2.218-1.082-4.48-4.907-4.48-2.12 0-4.386.707-6.273 2.215-3.82 3.16-5.895 8.351-5.895 12.597 0 3.914 1.934 6.227 5.754 6.227 4.246 0 7.926-2.453 9.953-5.852Zm-3.867-12.785c1.18 0 1.933 1.039 1.933 2.828 0 2.078-.945 4.106-2.879 5.05-1.367.567-3.914 1.227-5.945 1.509 2.172-7.786 5.098-9.387 6.797-9.387ZM638.648 227.524c.707 0 1.886.051 2.453.051.515 0 .707.187.613.848-.473 3.632-3.066 12.593-5.145 18.257a37.369 37.369 0 0 1 4.2-.378c1.133-3.915 2.36-7.454 3.445-10.094 1.602-3.727 3.82-7.313 5.566-7.313.66 0 .801.422.942 1.227.14.52.566.848 1.133.848 1.086 0 2.312-1.04 2.312-2.973 0-.848-.52-2.168-2.125-2.168-2.734 0-5.187 3.066-7.734 8.492h-.14c.753-2.926 1.788-6.937 2.026-8.492-1.98.707-5 1.035-7.218 1.18ZM674.45 240.876c-.94 1.98-2.687 4.34-4.245 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.953-16.98h-3.867l-.52 1.788c-.327-1.414-1.507-2.308-3.726-2.308-1.648 0-3.394.52-5.328 1.793-4.484 3.02-7.691 9.906-7.691 14.812 0 2.641 1.039 4.434 3.632 4.434 4.2 0 7.692-3.914 9.579-6.746.046-.047.093 0 .093-.047-.14.66-.425 1.508-.566 2.121-.52 1.746-1.04 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.792 1.699c0-3.867 2.168-9.813 5.14-13.398 1.606-1.934 2.926-2.5 4.34-2.5 1.559 0 2.266 1.039 2.266 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.215 6.84-1.324 0-1.699-1.414-1.699-2.594ZM687.19 240.356c-.851 2.313-3.066 5.285-5.379 5.285-1.086 0-1.273-.66-1.039-1.699.946-4.055 3.774-13.3 4.766-16.418l4.765-.281.473-.66h-4.906c.8-2.5 1.887-5.946 2.215-6.887-1.04.422-2.926.941-4.434 1.086-.473 1.602-1.039 3.629-1.7 5.8h-3.16l-.378.661 3.258.281c-1.18 3.918-3.211 10.524-4.485 14.817-.847 2.734-.468 4.527 2.739 4.527 2.687 0 5.847-1.7 7.64-5.379ZM710.68 240.829c-1.176 2.5-3.3 4.531-4.527 4.531-.66 0-.754-.52-.473-1.7 1.133-5.19 3.965-13.87 5.567-17.831-2.262.707-5.188 1.035-7.547 1.18l-.282.566 2.5-.05c.614 0 .66.284.52.71-.52 1.887-1.512 5.094-2.5 7.926-1.465 3.96-5.05 9.101-8.73 9.101-1.461 0-1.415-1.273-1.083-2.734 1.274-5.191 4.387-14.906 5.47-16.7-2.263.708-5.095.942-7.595 1.18l-.328.567 2.453-.05c.66 0 .707.284.563.757-.281.895-3.066 9.434-4.293 13.633-.848 3.066-.469 4.953 2.879 4.953 3.539 0 7.078-2.832 9.625-6.652-.379 1.132-.52 1.699-.707 2.265-.567 2.028-.899 4.387 1.84 4.387 3.207 0 5.707-2.785 7.074-5.52ZM713.986 227.524c.707 0 1.887.051 2.453.051.516 0 .707.187.613.848-.472 3.632-3.066 12.593-5.144 18.257a37.369 37.369 0 0 1 4.2-.378c1.132-3.915 2.359-7.454 3.444-10.094 1.602-3.727 3.82-7.313 5.567-7.313.66 0 .8.422.941 1.227.14.52.567.848 1.133.848 1.086 0 2.313-1.04 2.313-2.973 0-.848-.52-2.168-2.125-2.168-2.735 0-5.188 3.066-7.735 8.492h-.14c.753-2.926 1.789-6.937 2.027-8.492-1.98.707-5 1.035-7.219 1.18ZM749.79 240.876c-.942 1.98-2.688 4.34-4.247 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.954-16.98h-3.867l-.52 1.788c-.328-1.414-1.508-2.308-3.726-2.308-1.649 0-3.395.52-5.329 1.793-4.484 3.02-7.69 9.906-7.69 14.812 0 2.641 1.038 4.434 3.632 4.434 4.2 0 7.691-3.914 9.578-6.746.047-.047.094 0 .094-.047-.14.66-.426 1.508-.567 2.121-.52 1.746-1.039 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.794 1.699c0-3.867 2.168-9.813 5.141-13.398 1.605-1.934 2.926-2.5 4.34-2.5 1.558 0 2.265 1.039 2.265 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.214 6.84-1.325 0-1.7-1.414-1.7-2.594ZM764.602 214.977l2.359.047c.613.047.805.14.66.66-.707 2.973-1.414 5.567-3.867 13.73-1.606 5.376-2.734 9.009-3.914 12.927-.567 1.84-1.04 4.527 1.98 4.527 2.735 0 5.567-2.172 7.313-5.426l-.426-.566c-1.18 2.453-3.445 4.34-4.672 4.34-.66 0-.754-.47-.469-1.649.567-2.55 1.696-6.558 3.914-14.058 2.313-7.786 4.06-13.399 5.094-15.946-1.742.473-4.86.848-7.781.848ZM791.303 240.876c-.941 1.98-2.687 4.34-4.246 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.954-16.98h-3.867l-.52 1.788c-.328-1.414-1.508-2.308-3.726-2.308-1.649 0-3.395.52-5.329 1.793-4.484 3.02-7.691 9.906-7.691 14.812 0 2.641 1.04 4.434 3.633 4.434 4.2 0 7.691-3.914 9.578-6.746.047-.047.094 0 .094-.047-.14.66-.426 1.508-.567 2.121-.52 1.746-1.039 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.793 1.699c0-3.867 2.168-9.813 5.141-13.398 1.605-1.934 2.926-2.5 4.34-2.5 1.558 0 2.265 1.039 2.265 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.214 6.84-1.325 0-1.7-1.414-1.7-2.594ZM804.043 240.356c-.852 2.313-3.067 5.285-5.38 5.285-1.085 0-1.273-.66-1.038-1.699.945-4.055 3.773-13.3 4.765-16.418l4.766-.281.473-.66h-4.907c.801-2.5 1.887-5.946 2.215-6.887-1.039.422-2.926.941-4.433 1.086-.473 1.602-1.04 3.629-1.7 5.8h-3.16l-.379.661 3.258.281c-1.18 3.918-3.21 10.524-4.484 14.817-.848 2.734-.47 4.527 2.738 4.527 2.687 0 5.848-1.7 7.64-5.379ZM816.072 216.677a2.537 2.537 0 0 0-2.5 2.5c-.047 1.273.8 2.027 1.84 2.027 1.273 0 2.406-.942 2.453-2.406.046-1.274-.614-2.121-1.746-2.121Zm-7.645 10.847c1.04-.047 2.313 0 2.832 0 .52 0 .52.238.379.711-1.039 3.774-3.164 10.328-4.34 14.008-.851 2.55-.851 4.625 1.84 4.625 3.066 0 5.754-2.547 7.215-5.426l-.422-.566c-.992 2.172-3.21 4.433-4.766 4.433-.472 0-.613-.375-.379-1.46.993-4.008 4.293-14.72 5.66-17.88l-.093-.14c-1.98.613-5.473.941-7.688 1.133ZM838.855 240.923c-1.035 2.125-3.16 4.246-4.574 4.246-.52 0-.848-.422-.473-1.602 1.18-3.633 3.067-8.539 4.246-11.984.52-1.461 1.086-4.008-.093-5.047-.52-.473-1.18-.707-2.266-.707-4.527 0-8.395 4.48-10.8 8.3.847-2.827 1.741-5.992 2.308-8.3-2.262.566-4.953.941-7.313 1.133l-.187.515h2.547c.52 0 .613.192.472.758-.847 4.055-3.347 12.266-5.613 18.445 1.04-.191 2.734-.332 4.059-.378.894-3.16 1.601-5 2.308-6.934 1.512-4.2 5.899-11.938 10.098-11.938 1.508 0 1.414 1.653.988 2.832-1.129 3.301-2.922 8.114-4.195 11.7-.945 2.687-.852 4.906 1.789 4.906 2.644 0 5.566-2.266 7.125-5.426ZM853.671 225.829c-2.265 0-4.246.707-6.039 1.933-3.773 2.641-6.18 8.208-6.18 12.641 0 5.379 3.489 6.465 6.747 6.465 2.547 0 4.386-.613 6.18-1.887 3.632-2.453 5.94-8.02 5.94-12.406 0-4.438-2.261-6.746-6.554-6.746Zm.14.66c2.028 0 2.735 1.555 2.735 3.727 0 3.96-2.12 10.945-4.668 14.011-1.18 1.414-2.36 1.98-3.777 1.98-1.508 0-2.828-1.085-2.828-4.01 0-3.634 1.933-10 4.2-13.067 1.273-1.7 2.64-2.641 4.292-2.641ZM883.342 240.876c-.942 1.98-2.688 4.34-4.246 4.34-.614 0-.754-.707-.52-1.887.945-4.34 3.305-12.172 4.953-16.98h-3.867l-.52 1.788c-.328-1.414-1.507-2.308-3.726-2.308-1.648 0-3.395.52-5.328 1.793-4.485 3.02-7.692 9.906-7.692 14.812 0 2.641 1.04 4.434 3.633 4.434 4.2 0 7.692-3.914 9.578-6.746.047-.047.094 0 .094-.047-.14.66-.426 1.508-.566 2.121-.52 1.746-1.04 4.672 1.886 4.672 3.301 0 5.754-3.207 6.747-5.473Zm-16.793 1.699c0-3.867 2.168-9.813 5.14-13.398 1.606-1.934 2.926-2.5 4.34-2.5 1.559 0 2.266 1.039 2.266 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.215 6.84-1.324 0-1.7-1.414-1.7-2.594ZM918.253 240.923c-.992 2.078-3.16 4.293-4.625 4.293-.66 0-.754-.567-.422-1.555.895-2.879 3.066-8.445 4.34-12.078.469-1.32 1.129-3.774.14-4.906-.472-.473-1.18-.848-2.312-.848-4.574 0-8.254 4.433-10.754 8.113.375-1.32.66-2.027.941-3.207.567-2.078.66-4.906-2.312-4.906-4.621 0-8.3 4.574-10.754 8.113.613-2.027 1.746-5.898 2.266-8.113-2.313.613-5.051.848-7.41 1.133l-.094.515h2.453c.613 0 .707.285.566.946-.847 3.726-3.347 11.84-5.754 18.257a41.225 41.225 0 0 1 4.106-.378c.8-2.5 1.508-4.575 2.074-6.227 2.36-6.793 7.219-12.55 10.285-12.55 1.32 0 1.32 1.226.989 2.503-.848 3.488-3.774 11.98-5.52 16.652 1.086-.191 2.785-.332 4.2-.378.8-2.735 1.51-4.672 2.124-6.368 1.934-5.379 6.696-12.41 10.375-12.41 1.227 0 1.512 1.18 1.04 2.551-1.134 3.16-2.973 7.875-4.434 11.84-.946 2.547-1.274 4.953 1.699 4.953 2.687 0 5.707-2.266 7.215-5.379ZM936.414 239.321h-.28c-1.513 3.867-4.2 6.227-7.645 6.227-2.594 0-3.54-1.98-3.54-4.72 0-1.273.239-2.925.473-4.007 2.453-.379 6.7-1.371 9.012-2.55 1.508-.66 3.441-1.84 3.441-3.962 0-2.218-1.082-4.48-4.906-4.48-2.121 0-4.387.707-6.273 2.215-3.82 3.16-5.895 8.351-5.895 12.597 0 3.914 1.934 6.227 5.754 6.227 4.246 0 7.926-2.453 9.953-5.852Zm-3.867-12.785c1.18 0 1.934 1.039 1.934 2.828 0 2.078-.945 4.106-2.88 5.05-1.366.567-3.913 1.227-5.944 1.509 2.171-7.786 5.097-9.387 6.796-9.387ZM940.52 227.524c.707 0 1.887.051 2.453.051.516 0 .707.187.614.848-.473 3.632-3.067 12.593-5.145 18.257a37.369 37.369 0 0 1 4.2-.378c1.132-3.915 2.359-7.454 3.445-10.094 1.601-3.727 3.82-7.313 5.566-7.313.66 0 .8.422.942 1.227.14.52.566.848 1.132.848 1.086 0 2.313-1.04 2.313-2.973 0-.848-.52-2.168-2.125-2.168-2.735 0-5.188 3.066-7.735 8.492h-.14c.754-2.926 1.789-6.937 2.027-8.492-1.98.707-5 1.035-7.219 1.18ZM965.05 216.677a2.537 2.537 0 0 0-2.5 2.5c-.047 1.273.801 2.027 1.84 2.027 1.273 0 2.406-.942 2.453-2.406.047-1.274-.613-2.121-1.746-2.121Zm-7.644 10.847c1.039-.047 2.312 0 2.832 0s.52.238.379.711c-1.04 3.774-3.164 10.328-4.34 14.008-.852 2.55-.852 4.625 1.84 4.625 3.066 0 5.753-2.547 7.214-5.426l-.421-.566c-.993 2.172-3.211 4.433-4.766 4.433-.473 0-.613-.375-.379-1.46.992-4.008 4.293-14.72 5.66-17.88l-.094-.14c-1.98.613-5.472.941-7.687 1.133ZM982.927 239.321h-.234c-1.605 3.961-4.105 6.274-7.64 6.274-2.266 0-3.68-1.606-3.68-4.72 0-3.206.894-6.698 2.355-9.48 1.793-3.398 3.727-4.86 5.664-4.86 1.649 0 2.168.802 2.168 2.028 0 .66-.234 1.274-.566 1.98-.188.38-.281.946 0 1.274.238.473.754.711 1.32.711.899 0 2.313-.851 2.313-2.785 0-2.219-1.461-3.914-5.047-3.914-2.594 0-4.528 1.035-6.32 2.308-3.825 2.926-6.04 7.926-6.04 12.317 0 4.242 2.075 6.414 6.227 6.414 4.434 0 8.02-3.16 9.48-5.8ZM1006.374 240.876c-.941 1.98-2.687 4.34-4.246 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.954-16.98h-3.868l-.52 1.788c-.327-1.414-1.507-2.308-3.726-2.308-1.648 0-3.394.52-5.328 1.793-4.484 3.02-7.691 9.906-7.691 14.812 0 2.641 1.039 4.434 3.633 4.434 4.199 0 7.691-3.914 9.578-6.746.047-.047.093 0 .093-.047-.14.66-.425 1.508-.566 2.121-.52 1.746-1.039 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.793 1.699c0-3.867 2.168-9.813 5.14-13.398 1.606-1.934 2.927-2.5 4.34-2.5 1.56 0 2.266 1.039 2.266 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.215 6.84-1.324 0-1.699-1.414-1.699-2.594ZM1029.348 240.923c-1.035 2.125-3.16 4.246-4.575 4.246-.52 0-.847-.422-.472-1.602 1.18-3.633 3.066-8.539 4.246-11.984.52-1.461 1.086-4.008-.094-5.047-.52-.473-1.18-.707-2.265-.707-4.528 0-8.395 4.48-10.801 8.3.847-2.827 1.742-5.992 2.308-8.3-2.261.566-4.953.941-7.312 1.133l-.188.515h2.547c.52 0 .613.192.473.758-.848 4.055-3.348 12.266-5.613 18.445 1.039-.191 2.734-.332 4.058-.378.895-3.16 1.602-5 2.309-6.934 1.511-4.2 5.898-11.938 10.097-11.938 1.508 0 1.414 1.653.989 2.832-1.13 3.301-2.922 8.114-4.196 11.7-.945 2.687-.851 4.906 1.79 4.906 2.644 0 5.566-2.266 7.124-5.426ZM1052.558 240.876c-.941 1.98-2.687 4.34-4.246 4.34-.613 0-.754-.707-.52-1.887.946-4.34 3.305-12.172 4.954-16.98h-3.867l-.52 1.788c-.328-1.414-1.508-2.308-3.726-2.308-1.649 0-3.395.52-5.329 1.793-4.484 3.02-7.691 9.906-7.691 14.812 0 2.641 1.04 4.434 3.633 4.434 4.2 0 7.691-3.914 9.578-6.746.047-.047.094 0 .094-.047-.14.66-.426 1.508-.567 2.121-.52 1.746-1.039 4.672 1.887 4.672 3.3 0 5.754-3.207 6.746-5.473Zm-16.793 1.699c0-3.867 2.168-9.813 5.141-13.398 1.605-1.934 2.926-2.5 4.34-2.5 1.558 0 2.265 1.039 2.265 3.02 0 1.792-1.652 6.558-2.832 8.679-2.453 4.719-5 6.84-7.214 6.84-1.325 0-1.7-1.414-1.7-2.594Zm0 0" />
    <path d="M372.866 201.438h26.891l-.14-49.11-.141-20.663 6.933 20.664 17.125 49.11h27.032l17.125-49.11 6.933-20.664-.14 20.664-.286 49.11h28.024v-99.067h-42.176l-11.32 32.691-11.324 32.832-11.036-32.832-11.464-32.691h-42.036ZM505.617 201.438h31.278l8.21-19.39h45.997l8.207 19.39h33.258l-46.137-99.066h-34.672Zm62.555-74.3 14.86 36.09h-30ZM636.104 201.438h51.234c35.098 0 59.016-18.539 59.016-49.39 0-31.278-23.637-49.676-58.59-49.676h-51.66Zm49.96-77.414c18.114 0 28.587 9.2 28.587 28.164 0 18.68-10.473 27.88-28.586 27.88h-19.25v-56.044ZM753.429 201.438h30.71v-36.656h32.696c7.36 0 10.328 2.832 10.613 10.191.281 13.868.567 21.086 3.254 26.465h31.703c-3.398-6.933-4.105-16.418-4.531-27.597-.422-10.047-4.102-16.418-13.441-19.246 10.328-4.387 15.992-13.165 15.992-24.06 0-17.69-13.871-28.163-38.07-28.163h-68.926Zm63.972-78.406c8.067 0 12.735 3.824 12.735 11.04 0 7.077-4.813 10.898-12.735 10.898H784.14v-21.938ZM868.064 201.438h95.957v-20.52h-65.246v-19.816h49.11V141.01h-49.11v-17.692h65.246v-20.945h-95.957ZM1027.14 203.56c32.836 0 52.223-13.02 52.223-32.126 0-23.351-27.598-27.312-49.817-30.71-15.144-2.266-27.879-4.247-27.879-11.747 0-4.953 5.52-9.058 19.953-9.058 14.578 0 24.203 5.804 26.61 15.57h29.433c-3.68-22.363-24.48-35.242-57.031-35.242-31.562 0-50.242 12.738-50.242 31.562 0 23.207 26.324 27.313 48.402 30.426 15.848 2.266 29.438 4.106 29.438 12.172 0 5.238-6.512 9.48-21.938 9.48-15.285 0-23.777-5.234-26.043-16.132h-30.71c3.964 22.925 24.202 35.804 57.6 35.804ZM51.354 293.933h18.864c6.171 0 9.75-2.859 9.75-7.304 0-3.012-1.621-5.117-4.594-6.137 2.523-1.164 3.879-3.2 3.879-5.797 0-4.328-3.504-7.113-9.637-7.113H51.354Zm16.942-20.894c1.843 0 2.976.906 2.976 2.562 0 1.692-1.133 2.56-2.976 2.56h-8.809v-5.122Zm.453 10.242c1.957 0 3.125.942 3.125 2.672 0 1.77-1.168 2.633-3.125 2.633h-9.262v-5.305ZM93.179 294.422c3.125 0 5.648-1.13 7.418-3.16v2.671h7.867v-21.007h-7.867v14.343c-.942 1.13-2.489 1.883-4.254 1.883-2.41 0-4.145-1.281-4.145-3.992v-12.234h-7.867v13.328c0 5.008 3.578 8.168 8.848 8.168ZM125.931 294.574c6.512 0 11.18-3.312 12.496-8.508h-7.492c-.79 2.371-2.52 3.54-4.895 3.54-3.011 0-5.004-1.81-5.304-5.274h17.918v-.45c0-7.304-5.57-11.593-12.688-11.593-7.414 0-12.836 4.441-12.836 11.14 0 6.739 5.309 11.145 12.801 11.145Zm.035-17.469c2.336 0 4.14 1.317 4.934 3.766h-9.864c.676-2.41 2.446-3.766 4.93-3.766ZM143.282 293.933h7.906V279.63c.942-1.168 2.446-1.922 4.254-1.922 2.41 0 4.102 1.355 4.102 3.992v12.234h7.87v-13.289c0-5.043-3.577-8.207-8.808-8.207-3.09 0-5.648 1.168-7.418 3.164v-2.675h-7.906ZM185.142 294.574c7.793 0 13.102-4.328 13.102-11.144 0-6.778-5.344-11.141-13.102-11.141-7.793 0-13.136 4.363-13.136 11.14 0 6.817 5.343 11.145 13.136 11.145Zm0-5.156c-3.273 0-5.422-2.11-5.422-5.988 0-3.875 2.149-5.95 5.422-5.95 3.278 0 5.422 2.075 5.422 5.95 0 3.878-2.144 5.988-5.422 5.988ZM214.88 294.5c7.192 0 11.598-3.05 11.598-7.117 0-5.309-6.363-5.985-11.219-6.625-2.937-.375-5.308-.754-5.308-2.184 0-.902 1.168-1.695 3.652-1.695 2.824 0 4.629.906 5.422 3.012h7.152c-1.168-4.817-5.949-7.528-12.726-7.528-6.778 0-11.032 2.824-11.032 6.965 0 5.156 6.176 5.832 10.957 6.473 3.086.414 5.57.793 5.57 2.336 0 1.054-1.163 1.882-4.175 1.882-2.711 0-4.633-1.168-5.195-3.351h-7.266c1.129 5.195 5.984 7.832 12.57 7.832ZM241.084 293.933h8.316l2.184-5.156h12.238l2.18 5.156h8.848l-12.274-26.351h-9.223Zm16.637-19.765 3.953 9.601h-7.98ZM278.614 271.422h7.828v-4.781h-7.828Zm0 22.511h7.828v-21.007h-7.828ZM291.6 293.933h7.906v-12.835c1.168-1.622 3.54-2.485 6.063-2.485.75 0 1.504.074 2.219.223v-6.36h-.375c-3.653 0-6.25 1.543-7.907 4.29v-3.84H291.6ZM324.692 294.574c6.512 0 11.18-3.312 12.497-8.508h-7.493c-.789 2.371-2.52 3.54-4.894 3.54-3.012 0-5.004-1.81-5.305-5.274h17.918v-.45c0-7.304-5.57-11.593-12.687-11.593-7.414 0-12.836 4.441-12.836 11.14 0 6.739 5.308 11.145 12.8 11.145Zm.036-17.469c2.336 0 4.14 1.317 4.933 3.766h-9.863c.676-2.41 2.445-3.766 4.93-3.766ZM354.051 294.5c7.192 0 11.598-3.05 11.598-7.117 0-5.309-6.363-5.985-11.219-6.625-2.937-.375-5.308-.754-5.308-2.184 0-.902 1.168-1.695 3.652-1.695 2.824 0 4.629.906 5.422 3.012h7.152c-1.168-4.817-5.95-7.528-12.726-7.528-6.778 0-11.032 2.824-11.032 6.965 0 5.156 6.176 5.832 10.957 6.473 3.086.414 5.57.793 5.57 2.336 0 1.054-1.163 1.882-4.175 1.882-2.711 0-4.633-1.168-5.195-3.351h-7.266c1.129 5.195 5.984 7.832 12.57 7.832ZM421.348 293.933h8.055v-26.351h-5.945c-1.02 1.957-3.805 3.766-8.621 3.875v4.219h6.511ZM449.394 294.574c8.395 0 13.965-4.066 13.965-9.637 0-5.046-4.969-8.433-12.496-8.433-4.028 0-7.117 1.203-8.735 3.312.489-5.156 2.938-7.718 7.04-7.718 2.785 0 4.632 1.128 5.496 3.203h8.433c-1.469-5.235-7.004-8.36-13.89-8.36-9.11 0-15.024 5.235-15.024 14.344 0 8.695 5.723 13.29 15.211 13.29Zm-.3-5.195c-3.805 0-6.177-1.582-6.177-4.254 0-2.524 2.336-4.14 6.137-4.14 3.766 0 6.137 1.616 6.137 4.253 0 2.559-2.332 4.14-6.098 4.14ZM487.039 294.387c3.312 0 6.058-.942 7.98-2.825v2.371h7.754v-13.027c0-5.531-3.914-8.543-11.066-8.543-6.625 0-11.485 3.352-12.461 8.13h7.152c.488-1.993 2.223-3.349 5.008-3.349 2.332 0 3.574.79 3.574 1.805 0 1.094-1.09 1.848-5.082 2.676-5.082 1.05-11.14 1.879-11.14 6.812 0 3.54 3.273 5.95 8.28 5.95Zm-.715-6.364c0-1.582 1.992-2.07 4.629-2.71 1.582-.415 3.05-.715 4.066-1.282v3.992c-1.316 1.282-3.465 1.996-5.496 1.996-2.07 0-3.2-.867-3.2-1.996ZM507.93 293.933h7.829v-26.351h-7.828ZM532.21 293.933h26.39v-5.57l-16.262.262c3.012-1.77 5.457-3.2 7.414-4.48 8.098-4.254 8.774-6.7 8.774-9.372 0-4.48-5.008-7.832-12.16-7.832-8.356 0-13.477 3.88-14.758 10.43h8.02c.827-3.277 3.085-4.86 6.284-4.86 2.75 0 4.258 1.32 4.258 2.79 0 1.691-.832 2.86-6.59 6.36-2.597 1.694-6.285 3.878-11.37 6.925ZM578.365 294.574c8.055 0 13.399-3.39 13.399-8.246 0-2.934-1.73-5.156-5.57-6.098 3.125-1.015 4.78-3.086 4.78-5.609 0-4.629-4.968-7.68-12.835-7.68-8.547 0-13.817 3.801-15.024 9.524h7.946c.828-2.824 3.16-4.215 6.851-4.215 3.047 0 4.895 1.203 4.895 3.012 0 1.617-1.055 2.71-3.164 2.71h-5.723v4.97h5.875c2.41 0 3.652 1.128 3.652 2.972 0 2.11-2.07 3.39-5.273 3.39-4.14 0-6.398-1.695-7.266-5.386h-7.941c.977 6.742 6.324 10.656 15.398 10.656ZM618.003 294.422c3.313 0 6.059-1.317 7.868-3.688v3.2h7.867v-26.352h-7.867v8.547c-1.809-2.375-4.555-3.692-7.868-3.692-6.363 0-10.691 4.442-10.691 10.993 0 6.664 4.29 10.992 10.691 10.992Zm2.41-5.004c-3.277 0-5.386-2.11-5.386-6.024 0-3.84 2.11-5.914 5.387-5.914 3.347 0 5.496 2.075 5.496 5.95 0 3.878-2.149 5.988-5.496 5.988ZM651.207 294.574c6.511 0 11.18-3.312 12.496-8.508h-7.492c-.79 2.371-2.52 3.54-4.895 3.54-3.012 0-5.004-1.81-5.305-5.274h17.918v-.45c0-7.304-5.57-11.593-12.687-11.593-7.414 0-12.836 4.441-12.836 11.14 0 6.739 5.309 11.145 12.8 11.145Zm.035-17.469c2.336 0 4.14 1.317 4.933 3.766h-9.863c.676-2.41 2.445-3.766 4.93-3.766ZM687.608 294.387c3.312 0 6.058-.942 7.98-2.825v2.371h7.754v-13.027c0-5.531-3.914-8.543-11.066-8.543-6.625 0-11.485 3.352-12.461 8.13h7.152c.488-1.993 2.223-3.349 5.008-3.349 2.332 0 3.574.79 3.574 1.805 0 1.094-1.09 1.848-5.082 2.676-5.082 1.05-11.14 1.879-11.14 6.812 0 3.54 3.273 5.95 8.28 5.95Zm-.715-6.364c0-1.582 1.992-2.07 4.629-2.71 1.582-.415 3.05-.715 4.066-1.282v3.992c-1.316 1.282-3.465 1.996-5.496 1.996-2.07 0-3.2-.867-3.2-1.996ZM718.664 293.86c3.312 0 6.059-1.282 7.867-3.579v2.824c0 2.711-1.957 4.028-5.12 4.028-2.821 0-4.329-.754-4.97-2.297h-7.793c1.243 4.027 5.836 6.402 12.762 6.402 8.207 0 12.988-3.164 12.988-9.148v-19.164h-7.867v3.125c-1.808-2.332-4.555-3.614-7.867-3.614-6.363 0-10.691 4.293-10.691 10.73 0 6.474 4.289 10.692 10.691 10.692Zm2.41-4.895c-3.277 0-5.387-2.035-5.387-5.797 0-3.727 2.11-5.762 5.387-5.762 3.387 0 5.496 2.035 5.496 5.797 0 3.727-2.11 5.762-5.496 5.762ZM752.203 294.574c7.793 0 13.102-4.328 13.102-11.144 0-6.778-5.344-11.141-13.102-11.141-7.793 0-13.136 4.363-13.136 11.14 0 6.817 5.343 11.145 13.136 11.145Zm0-5.156c-3.273 0-5.422-2.11-5.422-5.988 0-3.875 2.149-5.95 5.422-5.95 3.278 0 5.422 2.075 5.422 5.95 0 3.878-2.144 5.988-5.422 5.988ZM781.941 294.5c7.192 0 11.598-3.05 11.598-7.117 0-5.309-6.363-5.985-11.219-6.625-2.937-.375-5.308-.754-5.308-2.184 0-.902 1.168-1.695 3.652-1.695 2.824 0 4.629.906 5.422 3.012h7.152c-1.168-4.817-5.949-7.528-12.726-7.528-6.778 0-11.032 2.824-11.032 6.965 0 5.156 6.176 5.832 10.957 6.473 3.086.414 5.57.793 5.57 2.336 0 1.054-1.163 1.882-4.175 1.882-2.711 0-4.633-1.168-5.195-3.351h-7.266c1.129 5.195 5.984 7.832 12.57 7.832ZM810.29 293.933h8.656v-5.042h-4.629c-1.996 0-2.863-.641-2.863-2.036v-9.035h7.492v-4.894h-7.492v-4.328H803.7v4.328h-6.097v4.894h6.097v10.242c0 3.84 2.07 5.871 6.59 5.871ZM836.112 294.574c7.793 0 13.101-4.328 13.101-11.144 0-6.778-5.343-11.141-13.101-11.141-7.793 0-13.137 4.363-13.137 11.14 0 6.817 5.344 11.145 13.137 11.145Zm0-5.156c-3.274 0-5.422-2.11-5.422-5.988 0-3.875 2.148-5.95 5.422-5.95 3.277 0 5.422 2.075 5.422 5.95 0 3.878-2.145 5.988-5.422 5.988ZM886.695 294.422c3.313 0 6.059-1.317 7.867-3.688v3.2h7.868v-26.352h-7.868v8.547c-1.808-2.375-4.554-3.692-7.867-3.692-6.363 0-10.691 4.442-10.691 10.993 0 6.664 4.289 10.992 10.691 10.992Zm2.41-5.004c-3.277 0-5.386-2.11-5.386-6.024 0-3.84 2.11-5.914 5.386-5.914 3.348 0 5.497 2.075 5.497 5.95 0 3.878-2.149 5.988-5.497 5.988ZM919.899 294.574c6.511 0 11.18-3.312 12.496-8.508h-7.493c-.789 2.371-2.519 3.54-4.894 3.54-3.012 0-5.004-1.81-5.305-5.274h17.918v-.45c0-7.304-5.57-11.593-12.687-11.593-7.414 0-12.836 4.441-12.836 11.14 0 6.739 5.308 11.145 12.8 11.145Zm.035-17.469c2.336 0 4.14 1.317 4.933 3.766h-9.863c.676-2.41 2.445-3.766 4.93-3.766ZM948.542 293.933h26.39v-5.57l-16.261.262c3.011-1.77 5.457-3.2 7.414-4.48 8.097-4.254 8.773-6.7 8.773-9.372 0-4.48-5.008-7.832-12.16-7.832-8.355 0-13.476 3.88-14.758 10.43h8.02c.828-3.277 3.086-4.86 6.285-4.86 2.75 0 4.258 1.32 4.258 2.79 0 1.691-.832 2.86-6.59 6.36-2.598 1.694-6.285 3.878-11.371 6.925ZM994.733 294.574c9.188 0 15.211-5.61 15.211-13.816 0-8.207-6.023-13.817-15.21-13.817-9.298 0-15.4 5.61-15.4 13.817s6.102 13.816 15.4 13.816Zm0-5.683c-4.402 0-7.078-2.977-7.078-8.133 0-5.157 2.676-8.133 7.078-8.133 4.219 0 6.926 3.012 6.926 8.133 0 5.156-2.707 8.133-6.926 8.133ZM1014.57 293.933h26.39v-5.57l-16.262.262c3.012-1.77 5.457-3.2 7.414-4.48 8.098-4.254 8.774-6.7 8.774-9.372 0-4.48-5.008-7.832-12.16-7.832-8.356 0-13.477 3.88-14.758 10.43h8.02c.827-3.277 3.085-4.86 6.284-4.86 2.75 0 4.258 1.32 4.258 2.79 0 1.691-.832 2.86-6.59 6.36-2.597 1.694-6.285 3.878-11.37 6.925ZM1060.725 294.574c8.055 0 13.399-3.39 13.399-8.246 0-2.934-1.73-5.156-5.57-6.098 3.124-1.015 4.78-3.086 4.78-5.609 0-4.629-4.968-7.68-12.835-7.68-8.547 0-13.817 3.801-15.024 9.524h7.946c.828-2.824 3.16-4.215 6.851-4.215 3.047 0 4.895 1.203 4.895 3.012 0 1.617-1.055 2.71-3.164 2.71h-5.723v4.97h5.875c2.41 0 3.652 1.128 3.652 2.972 0 2.11-2.07 3.39-5.273 3.39-4.14 0-6.398-1.695-7.266-5.386h-7.941c.976 6.742 6.324 10.656 15.398 10.656Zm0 0" />
    <path
      transform="matrix(3.7432 0 0 3.97351 374.794 288.85)"
      fill="black"
      d="M0 0h8.616"
      stroke="#000"
    />
  </svg>
)

export default SvgComponent;