import { Model, DataTypes } from "sequelize";
import sequelize from "../../database";

class ContactDetails extends Model {
  public userId!: number;
  public userName!: string | null;
  public userMail!: string | null;
  public subject!: string | null;
  public message!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ContactDetails.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userMail: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    subject: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "portfolio_contacts",
    sequelize,
    timestamps: true,
  },
);

export default ContactDetails;
