using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Taxi_Project.Models;

namespace Taxi_Project.Models
{
	public class UserDBContext
	{
		private string CS = ConfigurationManager.ConnectionStrings["dbcs"].ConnectionString;

		public int InsertContact(string ContName, string ContEmail, string ContMobNo, string ContMessage)
		{
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand("InsertContact", con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddWithValue("@ContName", ContName);
					cmd.Parameters.AddWithValue("@ContEmail", ContEmail);
					cmd.Parameters.AddWithValue("@ContMobNo", ContMobNo);
					cmd.Parameters.AddWithValue("@ContMessage", ContMessage);

					con.Open();
					return cmd.ExecuteNonQuery();
				}
			}
		}

		public int InsertBookingTour(string url, string bookingtourname, string bookingtouremail, string bookingtourphone, string bookingtourRoom, string bookingtourdate, string bookingtourPackage, string TourPackageName)
		{
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand("InsertBookingTour", con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddWithValue("@url", url);
					cmd.Parameters.AddWithValue("@bookingtourname", bookingtourname);
					cmd.Parameters.AddWithValue("@bookingtouremail", bookingtouremail);
					cmd.Parameters.AddWithValue("@bookingtourphone", bookingtourphone);
					cmd.Parameters.AddWithValue("@bookingtourRoom", bookingtourRoom);
					cmd.Parameters.AddWithValue("@bookingtourdate", bookingtourdate);
					cmd.Parameters.AddWithValue("@bookingtourPackage", bookingtourPackage);
					cmd.Parameters.AddWithValue("@TourPackageName", TourPackageName);

					con.Open();
					return cmd.ExecuteNonQuery();
				}
			}
		}

		public List<tbl_gallery> GetGalleryImages()
		{
			List<tbl_gallery> galleryImages = new List<tbl_gallery>();
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand("GetGalleryImages", con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					con.Open();
					SqlDataReader rdr = cmd.ExecuteReader();
					while (rdr.Read())
					{
						tbl_gallery galleryImage = new tbl_gallery();
						galleryImage.ID = Convert.ToInt32(rdr["ID"]);
						galleryImage.popupimg = rdr["popupimg"].ToString();
						galleryImage.srcimg = rdr["srcimg"].ToString();
						galleryImage.alt = rdr["alt"].ToString();
						galleryImage.Sts = rdr["Sts"].ToString();
						galleryImages.Add(galleryImage);
					}
				}
			}
			return galleryImages;
		}

	



		public int InsertBookingVehicle(string bookingPhone, string bookingLocation, string bookingDate, string bookingTime, string bookingVehicalClass, string noofpassenger)
		{
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand("InsertBookingVehicle", con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddWithValue("@bookingPhone", bookingPhone);
					cmd.Parameters.AddWithValue("@bookingLocation", bookingLocation);
					cmd.Parameters.AddWithValue("@bookingDate", bookingDate);
					cmd.Parameters.AddWithValue("@bookingTime", bookingTime);
					cmd.Parameters.AddWithValue("@bookingVehicalClass", bookingVehicalClass);
					cmd.Parameters.AddWithValue("@noofpassenger", noofpassenger);

					con.Open();
					return cmd.ExecuteNonQuery();
				}
			}
		}


		public int func_ExecuteScalar(string storedProcedureName, SqlParameter[] parameters)
		{
			int result = 0;
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand(storedProcedureName, con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.Parameters.AddRange(parameters);

					con.Open();
					result = (int)cmd.ExecuteScalar();
				}
			}
			return result;
		}


		public List<tbl_tourPackage> GetTourPackages()
		{
			List<tbl_tourPackage> tourPackages = new List<tbl_tourPackage>();
			using (SqlConnection con = new SqlConnection(CS))
			{
				using (SqlCommand cmd = new SqlCommand("GetTourPackages", con))
				{
					cmd.CommandType = CommandType.StoredProcedure;
					con.Open();
					SqlDataReader rdr = cmd.ExecuteReader();
					while (rdr.Read())
					{
						tbl_tourPackage tourPackage = new tbl_tourPackage
						{
							ID = Convert.ToInt32(rdr["ID"]),
							PackageImage = rdr["PackageImage"].ToString(),
							PackageTitle = rdr["PackageTitle"].ToString(),
							Duration = rdr["Duration"].ToString(),
							Location = rdr["Location"].ToString()
						};
						tourPackages.Add(tourPackage);
					}
				}
			}
			return tourPackages;
		}


		public List<tbl_TourDetail> GetTourDetails(int ID)
		{
			List<tbl_TourDetail> tourDetails = new List<tbl_TourDetail>();
			try
			{
				using (SqlConnection con = new SqlConnection(CS))
				{
					using (SqlCommand cmd = new SqlCommand("GetTourDetails", con))
					{
						cmd.CommandType = CommandType.StoredProcedure;
						cmd.Parameters.AddWithValue("@ID", ID);

						con.Open();
						SqlDataReader rdr = cmd.ExecuteReader();
						while (rdr.Read())
						{
							tbl_TourDetail tourDetail = new tbl_TourDetail
							{
								ID = Convert.ToInt32(rdr["ID"]),
								tourPDetailid = Convert.ToInt32(rdr["tourPDetailid"]),
								Tourimg = rdr["Tourimg"].ToString(),
							};
							tourDetails.Add(tourDetail);
						}
					}
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine($"Error occurred while getting tour details: {ex.Message}");
				return null;
			}
			return tourDetails;
		}


	}
}
