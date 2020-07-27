var React = require('react');

var About = () =>
    <div>
        <h1 className="text-center">About</h1>
        <p >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged.
        </p>
        <p>Here are some ways showing you how to build your own react Website.</p>
        <ul>
            <li>
                 <a href="https://youtu.be/jgVkR5EKI68">React Video</a>
            </li>

            <li>
                 <a href="https://reactjs.org/docs/create-a-new-react-app.html">React Documents</a>
            </li>

            <li>
                 <a href="https://openweathermap.org/">Open Weather Api Website</a>
            </li>
        </ul>

    </div>



module.exports = About;