import { useSelector, useDispatch } from "react-redux";
import { setUserData, editUserData } from "../../features/userSlice";
import "../style.css";
import { fetchUserProfile, editProfile } from "../../app/apiService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const isEditing = useSelector((state) => state.user.isEditing);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstName) {
      const fetchData = async () => {
        try {
          const response = await fetchUserProfile(token);
          const userData = await response.json();

          dispatch(
            setUserData({
              firstName: userData.body.firstName,
              lastName: userData.body.lastName,
            })
          );
        } catch (error) {
          console.error("Error fetching user profile:", error);
          navigate("/sign-in");
        }
      };
      fetchData();
    }
  }, [dispatch, navigate, token, firstName, lastName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      dispatch(
        setUserData({
          firstName: name === "firstName" ? value : firstName,
          lastName: name === "lastName" ? value : lastName,
        })
      );
    }
  };

  const handleEditButtonClick = () => {
    dispatch(
      editUserData({
        isEditing: !isEditing,
      })
    );
  };

  const saveNewUserDatas = async () => {
    try {
      await editProfile(token, firstName, lastName);
      // Mettre à jour l'état isEditing une fois la sauvegarde réussie
      dispatch(editUserData({ isEditing: false }));
    } catch (error) {
      console.error("Error editing user profile:", error);
      // Gérer les erreurs ici, si nécessaire
    }
  };

  return (
    <div className="header">
      {isEditing ? (
        <div>
          <h1 id="currentUser">
            Welcome back
            <br />
            <div>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <button onClick={saveNewUserDatas} className="edit-button">
              Save
            </button>
          </h1>
        </div>
      ) : (
        <div>
          <h1 id="currentUser">
            Welcome back
            <br />
            {`${firstName} ${lastName}!`}
          </h1>
          <button className="edit-button" onClick={handleEditButtonClick}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
