export function Form() {
    return (<form>
        <label htmlFor="username">
            Name: <input type="text" name="username" id="username" />
        </label>
        <label htmlFor="age">
            Age: <input type="number" name="age" id="age" />
        </label>
        <label htmlFor="email">
            Email: <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="pswd1">
            Password: <input type="password" name="password1" id="pswd1" />
        </label>
        <label htmlFor="pswd2">
            Confirm Password: <input type="password" name="password2" id="pswd2" />
        </label>
        <label htmlFor="gender">
            Gender: <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </label>
        <p>We need users to consent to the following agreements</p>
        <label htmlFor="accept">
            <input type="checkbox" name="accept" id="accept" />
            Terms and Conditions.
        </label>
        <label htmlFor="upload">
            Upload picture
         <input type="upload" id="myfile" name="myfile"/>
        </label>
        <label htmlFor="country">
        <input list="countries" type="text" id="country" name="country" />
        Choose a Country: 
        <datalist id="countries">
            <option value="Chocolate"/>
            <option value="Coconut"/>
            <option value="Mint"/>
            <option value="Strawberry"/>
            <option value="Vanilla"/>
        </datalist> 
        </label>
    </form>)
}